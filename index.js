const fs = require('fs/promises');

const OpenAI = require('openai');

const {loadTask} = require('./src/loader.js');
const {execQueue} = require('./src/queue.js');

const evaluate = require('./src/evaluate.js');
const fuzz = require('./src/fuzzer.js');

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});



let MODEL = 'gpt-3.5-turbo-1106';



function renderSample(sample, TASK) { 
    for (let i = 0; i < sample.input.length; i++) {
        sample.input[i] = `${TASK.parameters[i]}=${JSON.stringify(sample.input[i])}`;
    }

    return sample.input.join(', ');
}


function mutateCodeAccordingToPerf(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
    role: 'user',
    content: `I try on the following input and it returned ${JSON.stringify(sample.result)}" when the correct class was "${sample.output}",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
${renderSample(sample, TASK)}`
    };
}


function beCreative(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
        role: 'user',
        content: `Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
${renderSample(sample, TASK)}`
    };
}

function newFactor(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];


    return {
        role: 'user',
        content: `Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
${renderSample(sample, TASK)}`
    };
}

function useAnotherMethod(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
        role: 'user',
        content: `Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
${renderSample(sample, TASK)}`
    };
}


function combination(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
        role: 'user',
        content: `Try to add a step in the computation using novel combination of variable. here is a sample input:
${renderSample(sample, TASK)}`
    };
}

function simplify(results, TASK) { 

    return {
        role: 'user',
        content: `Try to simplify the code, and remove some of the complexity.`
    };
}


function improve(results) { 

    return {
        role: 'user',
        content: `Try to improve the prediction accuracy, what could be a smart way?    `
    };
}

function unusedvariable(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
        role: 'user',
        content: `Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
${renderSample(sample, TASK)}`
    };
}

function unusedvariableFound(results, TASK) { 
    // find unused parameters
    let usedVariables = {};
    for (let variable of TASK.parameters) {
        // count in code
        let count = (results.code.match(new RegExp(variable, 'g')) || []).length;
        usedVariables[variable] = count;
    }

    // find least used variable
    let leastUsedVariable = null;
    let leastUsedVariableCount = Infinity;
    for (let variable of TASK.parameters) {
        if (usedVariables[variable] < leastUsedVariableCount) {
            leastUsedVariable = variable;
            leastUsedVariableCount = usedVariables[variable];
        }
    }

    // get 20 values for this variable
    let values = results.results.map(r => r.input[TASK.parameters.indexOf(leastUsedVariable)]).slice(0, 20);

    return {
        role: 'user',
        content: `Try to add a step in the computation using the parameter ${leastUsedVariable}. Here as some value it can take: ${values.join(', ')}.`
    };
}

async function nextGeneration(iteration, individu, TASK, ticksSinceLastImprovement, seedMessage, bestScore, bestResults, bestMessage, outDir ) { 
    let correctionMessage = null;

    let methods = [
        beCreative,
        simplify,
        improve,
        useAnotherMethod,
        unusedvariableFound,
        combination,
        unusedvariable,
        mutateCodeAccordingToPerf,
        newFactor
    ]
    correctionMessage = methods[Math.random() * methods.length | 0](bestResults, TASK);

    let modelPrompt = [...seedMessage, bestMessage, correctionMessage];

    let chatCompletion = null;


       chatCompletion =  await openai.chat.completions.create({
            messages: modelPrompt,
            model: MODEL,
        });


    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
    let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];

    let codes = codeBlocks.map(match => match[1]);

    let code = codes.join('\n\n');

    fs.writeFile(`${outDir}/code_${iteration}-${individu}.js`, code);

    results = await evaluate(code, TASK);
    fs.writeFile(`${outDir}/log_${iteration}-${individu}.json`, JSON.stringify({
        llm:[...modelPrompt, chatCompletion.choices[0].message],
        perf: results.score
    },null, 2));
    results.code = 
    `
    /* ${correctionMessage.content} */
    
    ${code}`;

    if (TASK.useFuzzer) { 
        results = await fuzz(results, TASK);
        fs.writeFile(`${outDir}/code_fuzz_${iteration}-${individu}.js`, results.code);
    }
    
    results.individu = individu;
    results.message = chatCompletion.choices[0].message;
    return results;
}


async function runTask(taskDir) {

    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK);

    await fs.mkdir(TASK.taskDir + '/generation/', { recursive: true });

    let genCount = (await fs.readdir(TASK.taskDir + '/generation/')).length;

    let outDir =  TASK.taskDir + '/generation/gen_' + genCount;

    await fs.mkdir(outDir, { recursive: true });

    let iteration = 0;

    let MainPrompt = `You are a programmer, and you need to build a javascript funtion to solve the following task:
${TASK.goal}
To solve this task you need to create a javascript function that take into parameters ${TASK.input} and return ${TASK.output}.
Output the code between \`\`\`javascript and \`\`\` tags.
Do not add usage sample code, only output the functions.
Try to compute the probability to the best of your ability based on the parameters inputs! DO NOT Output Placeholder CODE! Actually implement the function!
Your are not allow to use any external library or call any external service/library/function.
Your output function should NOT contain ANY Comment. Do not add inline comments in the code. Do the calculations in the function, do not put a comment saying what to do instead.
The function should be named ${TASK.functionName}  and its signature should be ${TASK.functionnSignature}.
The function should be deterministic, it should always return the same output for a given input.
The function should contain calculations, not just a lookup table.
`;

    let seedMessage = [{ role: 'system', content: MainPrompt }];

    let chatCompletion = await openai.chat.completions.create({
        messages: [...seedMessage],
        model: MODEL,
     });

    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
    let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];

    let codes = codeBlocks.map(match => match[1]);

    let code = codes.join('\n\n');
    fs.writeFile(`${outDir}/code_${iteration}.js`, code);


    let results = await evaluate(code, TASK);
   
    fs.writeFile(`${outDir}/log_${iteration}.js`, JSON.stringify({
        llm: [...seedMessage, chatCompletion.choices[0].message],
        perf: results.score
    }, null, 2));

    console.log(results.score, code);
    let bestMessage = chatCompletion.choices[0].message;
    let bestResults =  results;
    let bestScore = results.score;
    bestResults.code = code;
    let ticksSinceLastImprovement = 0;
    while (true) {
        iteration++;
        console.log("Iteration", iteration, "ticks since last gain", ticksSinceLastImprovement, "best", bestScore);
        if (iteration == 2000 || ticksSinceLastImprovement > 50) {
            break;
        }
        let jobQueue = [];
        for (let count = 0; count < 5; count++) { 
            // async function nextGeneration(iteration, individu, TASK, ticksSinceLastImprovement, seedMessage, bestScore, bestResults, bestMessage) { 

            jobQueue.push({
                task: nextGeneration,
                args: [
                    iteration,
                    count,
                    TASK,
                    ticksSinceLastImprovement,
                    seedMessage,
                    bestScore,
                    bestResults,
                    bestMessage,
                    outDir
                ]
            });
        }

        let results = await execQueue(jobQueue, 10);

        // remove failed results (false)
        results = results.filter(r => r);

        // remove NaN and undefined results
        results = results.filter(r => r.score);
        // sort results by perf (asc)
        results.sort((a, b) => a.score - b.score);
        ticksSinceLastImprovement++;
        // take the best result
        if (results.length > 0) {
            let best = results[0]; 
            if (best.score < bestScore) {
                bestScore = best.score;
                bestResults = best;
                bestMessage = best.message;
                ticksSinceLastImprovement = 0;
                fs.writeFile(`${outDir}/_improvement_${iteration}.js`, `/* Best score: ${bestScore} */\n\n` +  best.code);
                console.log(best.code);
            }
        }
    }
}


let taskDir = process.argv[2] || `./sample_tasks/KaggleS3e25`;

runTask(taskDir);