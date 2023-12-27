const fs = require('fs/promises');

const OpenAI = require('openai');

const {loadTask} = require('./src/loader.js');
const {execQueue} = require('./src/queue.js');

const evaluate = require('./src/evaluate.js');

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});



let MODEL = 'gpt-3.5-turbo-1106';






function mutateCodeAccordingToPerf(results) { 
    if (!results) {debugger}
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
    role: 'user',
    content: `I try on the following input and it returned ${JSON.stringify(sample.result)}" when the correct class was "${sample.output}",Reflect on what went wrong the correct the function. 
Here is the input used, input:
${JSON.stringify(sample.input).slice(1, -1)}`
    };
}


function beCreative(results) { 
    return {
        role: 'user',
        content: `Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function.`
    };
}

function useAnotherMethod(results) { 
    let sample = results.results[Math.random() * results.results.length | 0];

    return {
        role: 'user',
        content: `Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
${JSON.stringify(sample.input).slice(1, -1)}`
    };
}


async function nextGeneration(iteration, individu, TASK, ticksSinceLastImprovement, seedMessage, bestScore, bestResults, bestMessage, outDir ) { 
    let correctionMessage = null;

    if (ticksSinceLastImprovement > 3 && Math.random() < 0.3) { 
        correctionMessage = beCreative(bestResults);
    }
    else if (Math.random() < 0.1) {
        correctionMessage = useAnotherMethod(bestResults);
    } else {
        correctionMessage = mutateCodeAccordingToPerf(bestResults);
    }

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

    results.code = code;
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
Your output function should NOT contain ANY Comment. Do not add inline comments in the code.
The function should be named ${TASK.functionName}  and its signature should be ${TASK.functionnSignature}.
`;

    let seedMessage = [{ role: 'system', content: MainPrompt }];

    let chatCompletion = await openai.chat.completions.create({
        messages: [...seedMessage],
        model: MODEL,
     });
    console.log(chatCompletion.choices[0].message);

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

    let bestMessage = chatCompletion.choices[0].message;
    let bestResults = results;
    let bestScore = results.score;
    let ticksSinceLastImprovement = 0;
    while (true) {
        iteration++;
        if (iteration == 1000) {
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
        // take the best result
        if (results.length > 0) {
            let best = results[0]; 
            if (best.score < bestScore) {
                bestScore = best.score;
                bestResults = results;
                bestMessage = best.message;
                ticksSinceLastImprovement = 0;
                fs.writeFile(`${outDir}/_improvement_${iteration}.js`, `/* Best score: ${bestScore} */\n\n` +  best.code);
            }
        }
    }
}


let taskDir = `./sample_tasks/KaggleS3e25`;

runTask(taskDir);