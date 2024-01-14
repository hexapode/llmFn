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
// let MODEL = 'gpt-4-1106-preview';


function renderSample(sample, TASK) { 
    let newSample= {...sample};
    for (let i = 0; i < newSample.input.length; i++) {
        newSample.input[i] = `${TASK.parameters[i]}=${newSample.input[i]}`;
    }

    return 'The result is ' + newSample.output + ' for: ' + newSample.input.join(', ') + '.';
}



function mutateCodeAccordingToPerf(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
    role: 'user',
    content: `I try on the following input and it returned ${JSON.stringify(sample.result)}" when the correct class was "${sample.output}",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
${renderSample(sample, TASK)}`
    };
}


function beCreative(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
        role: 'user',
        content: `Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
${renderSample(sample, TASK)}`
    };
}

function newFactor(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];


    return {
        role: 'user',
        content: `Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
${renderSample(sample, TASK)}`
    };
}

function useAnotherMethod(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
        role: 'user',
        content: `Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
${renderSample(sample, TASK)}`
    };
}


function combination(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
        role: 'user',
        content: `Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
${renderSample(sample, TASK)}`
    };
}

function complexify(results, TASK) { 
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
        role: 'user',
        content: `Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
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
    let sample = results.results[Math.random() * results.results.length * 0.05 | 0];

    return {
        role: 'user',
        content: `Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
${renderSample(sample, TASK)}`
    };
}


async function refactor(results, TASK) { 

    const prompt = `
        You will be provided with a JS function. 
        If it make sense, refactor it by spliting it into multiple sub functions that reuse the main function parameter and are contain in the main function. 
        output the full code. Do not change the way the code work. output between \`\`\`javscript and \`\`\` tags.`;

    let score = await evaluate(results.code, TASK);


    let chatCompletion = await openai.chat.completions.create({    
        messages: [{
                role: "system",
                content: prompt
            },
            {
                role: "user",
                content: results.code
            }
        ],
        model: MODEL,
    });

    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
    let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];
    let code = codeBlocks.join('\n\n');

    console.log(">>>>>>refactor IN\n\n", results.code);
    console.log(">>>>>>refactor out\n\n", code);

    let codeScore = await evaluate(code, TASK);

    if (codeScore != score) {
         console.log("failed, try again");

        return await refactor(results, TASK);
    }

    return code;
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
        content: `Try to think how ${leastUsedVariable} parameter could impact the prediction, then add a step in the computation using the parameter ${leastUsedVariable}. Here as some value it can take: ${values.join(', ')}.`
    };
}

async function nextGeneration(iteration, individu, TASK, ticksSinceLastImprovement, seedMessage, bestScore, bestResults, bestMessage, outDir ) { 
    let correctionMessage = null;

    let methods = [
        beCreative,
      //  simplify,
        improve,
        useAnotherMethod,
        unusedvariableFound,
        combination,
        unusedvariable,
        unusedvariableFound,
        unusedvariableFound,
        mutateCodeAccordingToPerf,
        newFactor,
        complexify
    ]
    correctionMessage = methods[Math.random() * methods.length | 0](bestResults, TASK);

    correctionMessage.content += "You don't need to ouput again the subfunction just put a comment // functions go there";
    // remove all comment (// and /* */) from the code
    let bestCode = bestResults.code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\r\n]*/g, '');
    let CodeNoComment = bestCode;
    // remove all functions that are not the TASK.dataset.functionName function
    let functions = bestCode.replace('function ' + TASK.functionName, "entrypoint " + TASK.functionName).match(/function\s*([A-z0-9]+)?\s*\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)\s*\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}/gm); 
    if (functions) {
        functions = functions.filter(func => !func.startsWith(`function ${TASK.functionName}`));
        functions.forEach(func => {
            bestCode = bestCode.replace(func, '');
        });
    }
    else {
        functions = [];
    }

    // remove all multiple following \n from bestCode and replce by \n
    bestCode = bestCode.replace(/\n+/gm, '\n');

    bestCode = bestCode.trim();    



    let modelPrompt = [...seedMessage, {
        content: CodeNoComment, 
        role: "user"
    }, correctionMessage];

    let chatCompletion = null;


    chatCompletion =  await openai.chat.completions.create({
        messages: modelPrompt,
        model: MODEL,
    });


    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
    let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];

    let codes = codeBlocks.map(match => match[1]);

    let code = codes.join('\n\n');

    // add the removed function to the code

    let functionsToAdd = functions.join('\n\n');

    // add the functionTo add at the first line of TASK.functionName function (after delcaration)in code
    let functionNameIndex = code.indexOf(`function ${TASK.functionName}`);
    let functionDeclarationIndex = code.indexOf('{', functionNameIndex);
    code = code.slice(0, functionDeclarationIndex + 1) + '\n' + functionsToAdd + '\n' + code.slice(functionDeclarationIndex + 1);

    results = await evaluate(code, TASK);
    code = `/** // ${results.score} //**/\n/**\n${correctionMessage.content}\n**/\n${code}`

    results.code = 
    `
    /* ${correctionMessage.content} */
    
    ${code}`;

    if (TASK.useFuzzer) { 
        results = await fuzz(results, TASK, 10 + ticksSinceLastImprovement / 2 | 0, 2, TASK.fuzzerPct || a, [-1, .5, 1.5, .9, 1.1, .09, 1.01],  [0.1, -0.1]);
      //  fs.writeFile(`${outDir}/code_fuzz_${iteration}-${individu}.js`, results.code);
    }
    
    results.individu = individu;
    results.message = chatCompletion.choices[0].message;
    return results;
}


async function runTask(taskDir, gen) {

    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK);

    await fs.mkdir(TASK.taskDir + '/generation/', { recursive: true });

    
    let genCount = (await fs.readdir(TASK.taskDir + '/generation/')).length;
    if (gen) {
        genCount = gen;
    }
    let outDir =  TASK.taskDir + '/generation/gen_' + genCount;

    await fs.mkdir(outDir, { recursive: true });

    
    let iteration = 0;
    if (gen) {
        iteration =  (await fs.readdir(outDir)).length;
    }

    let MainPrompt = `You are a programmer, and you need to build a javascript funtion to solve the following task:
${TASK.goal}
To solve this task you need to create a javascript function that take into parameters ${TASK.input} and return ${TASK.output}.
Output the code between \`\`\`javascript and \`\`\` tags.
Do not add usage sample code, only output the functions.
Try to compute the probability to the best of your ability based on the parameters inputs! DO NOT Output Placeholder CODE! Actually implement the function!
Your are not allow to use any external library or call any external service/library/function.
The function should be named ${TASK.functionName}  and its signature should be ${TASK.functionSignature}.
The function should be deterministic, it should always return the same output for a given input.
The function should contain calculations, not just a lookup table.
Before updating the function explain your reasoning in a comment.
Compute your prediction in the function, and return them at the end of the function. Do not return value before end of function.
The function should not contain calls to a neural network or machine learning model.
`;

    let seedMessage = [{ role: 'system', content: MainPrompt }];



    let ticksSinceLastImprovement = 0;
    let bestMessage = null;
    let bestScore = null;
    let bestResults = null;


    if (gen) {
        let bCode=   await fs.readFile(`${outDir}/best.js`, 'utf8');
        bestMessage = {
            role: "assistant",  
            content:bCode
        };
        bestResults =  await evaluate(bCode, TASK);
        console.log("Loaded best of gen", bestResults.score);
        bestScore = bestResults.score;
        bestResults.code = bCode;
    }
    else {
        let chatCompletion = await openai.chat.completions.create({
            messages: [...seedMessage],
            model: MODEL,
        });

        // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
        let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];

        let codes = codeBlocks.map(match => match[1]);

        let code = codes.join('\n\n');

        let results = await evaluate(code, TASK);
    
        console.log(results.score, code);
        bestMessage = chatCompletion.choices[0].message;
        bestResults =  results;
        bestResults.code = code;

        bestScore = results.score;
    }

    while (true) {
        // reset Task?
      //  await loadTask(TASK);
        iteration++;
        console.log("Iteration", iteration, "ticks since last gain", ticksSinceLastImprovement, "best", bestScore);
        if (iteration == 2000 || ticksSinceLastImprovement > 50) {
            break;
        }
        let jobQueue = [];
        for (let count = 0; count < 1; count++) { 
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
        if (TASK.dataset.evaluatorOrder == "lowerIsBetter") {
             results.sort((a, b) => a.score - b.score);
        }
        else {
             results.sort((a, b) => b.score - a.score);
        }
       
        ticksSinceLastImprovement++;
        // take the best result
        if (results.length > 0) {
            let best = results[0]; 
            let real = {};
            await loadTask(TASK);

            real = await evaluate(best.code, TASK);
        
            if (  
                (TASK.dataset.evaluatorOrder == "lowerIsBetter" && real.score < bestScore)
                    ||
                    (TASK.dataset.evaluatorOrder == "higherIsBetter" && real.score > bestScore)) {

                let refactoredCode = await refactor(best, TASK);
                best.code = refactoredCode;
                bestScore = real.score;
                bestResults = best;
                bestMessage = best.message;
                ticksSinceLastImprovement = 0;
                fs.writeFile(`${outDir}/_improvement_${iteration}.js`, `/* Best score: ${bestScore} */\n\n` +  best.code);
                fs.writeFile(`${outDir}/best.js`, `/* Best score: ${bestScore} */\n\n` +  best.code);

                console.log(best.code);
            }

        }
    }
}


let taskDir = process.argv[2] || `./sample_tasks/KaggleS3e25`;
let gen = parseInt(process.argv[3]) || 0;
runTask(taskDir, gen);