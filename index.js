const fs = require('fs/promises');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});



let MODEL = 'gpt-3.5-turbo-1106';

async function loadTask(TASK) { 
    if (TASK.dataset.type == "fileBased") {
        TASK.dataSet = [];

        let files = await fs.readdir(`${TASK.taskDir}/dataset/input`);
        for (let file of files) {
            if (file.endsWith('.txt')) {
                let input = await fs.readFile(`${TASK.taskDir}/dataset/input/${file}`, 'utf8');
                let output = await fs.readFile(`${TASK.taskDir}/dataset/output/${file}`, 'utf8');
                TASK.dataSet.push({ input, output });
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function execQueue(queue, concurrency) {
    let result = [];
    let running = 0;
    
    let succeded = 0;
    let current = 0;
    while (succeded < queue.length) { 
        if (running < concurrency && current < queue.length) { 
            running++;
            let worker = async function() {
                let fn = queue[current].task;
                let args = queue[current].args;
                try {
                    let res = await fn(...args);

                    result[current] = res;
                    running--;
                    succeded++;
                }
                catch (e) {
                    console.log(e);
                    console.log("WITH", args)
                    // requeue
                     queue.push({
                        task: fn,
                        args: args
                    })
                    running--;
                    succeded++;
                }
                
            }
            worker();
            current++;
        }
        else {
            await sleep(100);
        }
    }
    return result;
}


async function evaluate(code, TASK) { 
    console.log("Evaluating code")
    console.log(code);
    let fn = null;
    try {
        fn = eval(code + ";" + TASK.functionName);
    }
    catch (e) {
        console.log(e);
        return {
            input : "undefined",
            output : "undefined",
            result : e.toString()   
        };
    }
    console.log(fn);
    let results = [];
    for (let[index, data] of TASK.dataSet.entries()) {
        let input = data.input;
        let output = data.output;
        let result = fn(input);
       
        if (!result) {
             results.push ({
                input : input,
                output : output,
                result : "undefined"
            });
        }
        else if (result.trim() != output.trim()) {
            results.push ({
                input : input,
                output : output.trim(),
                result : result
            });
        }
    }
    console.log(results.length, '...failed');
    return results;
}

function mutateCodeAccordingToPerf(results) { 
    let sample = results[Math.random() * results.length | 0];

    return {
    role: 'user',
    content: `I try on the following input and it returned "${sample.result}" instead of "${sample.output}",Reflect on what went wrong the correct the function. 
Here is the input used, input:
${sample.input}`
    };
}


function beCreative(results) { 
    return {
        role: 'user',
        content: `Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function.`
    };
}

function useAnotherMethod(results) { 
    return {
        role: 'user',
        content: `Try to implement another way of doing this, why trying to stay somehow similar to previously generated function.`
    };
}


async function nextGeneration(iteration, individu, TASK, ticksSinceLastImprovement, seedMessage, bestScore, bestResults, bestMessage, outDir ) { 
    let correctionMessage = null;

    if (ticksSinceLastImprovement > 3 && Math.random() < 0.3) { 
        correctionMessage = beCreative(bestResults);
    }
    else if (Math.random() < 0.1) {
        useAnotherMethod(bestResults);
    } else {
        correctionMessage = mutateCodeAccordingToPerf(bestResults);
    }

    let modelPrompt = [...seedMessage, bestMessage, correctionMessage];

    let chatCompletion = await openai.chat.completions.create({
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
        perf: results.length
    },null, 2));

    if (results.length < bestScore) {
        bestMessage = chatCompletion.choices[0].message;
        bestResults = results;
        bestScore = results.length;
        return {
            bestMessage,
            bestResults,
            bestScore,
            code,
            individu
        }
    }
    return false;
}




/**
      let jobQueue = [];
        for (let page of pages) { 
            jobQueue.push({
                task: partialLlmCleanup,
                args: [outdir, page]
            });
        }

        await execQueue(jobQueue, 10);

 */
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
Your are not allow to use any external library or call any external service/library/function.
The function should be named ${TASK.functionName}.
`;

    let seedMessage = [{ role: 'system', content: MainPrompt }];

    let chatCompletion = await openai.chat.completions.create({
        messages: [...seedMessage],
        model: MODEL,
     });
    console.log(chatCompletion.choices[0].message);

    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks

    // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
    let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];

    let codes = codeBlocks.map(match => match[1]);

    let code = codes.join('\n\n');
    fs.writeFile(`${outDir}/code_${iteration}.js`, code);


    let results = await evaluate(code, TASK);
    fs.writeFile(`${outDir}/log_${iteration}.js`, JSON.stringify({
        llm: [...seedMessage, chatCompletion.choices[0].message],
        perf: results.length
    }, null, 2));

    let bestMessage = chatCompletion.choices[0].message;
    let bestResults = results;
    let bestScore = results.length;
    let ticksSinceLastImprovement = 0;
    while (true) {
        iteration++;
        if (iteration == 20) {
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
        // sort results by perf (asc)
        results.sort((a, b) => a.bestScore - b.bestScore);
        // take the best result
        if (results.length) {
            let best = results[0]; 
            if (best.bestScore < bestScore) {
                bestScore = best.bestScore;
                bestResults = best.bestResults;
                bestMessage = best.bestMessage;
                ticksSinceLastImprovement = 0;
                fs.writeFile(`${outDir}/_improvement_${iteration}.js`, `/* Best score: ${bestScore} */\n\n` +  best.code);
            }
        }
    }
}


let taskDir = `./tasks/TableExtractor`;

runTask(taskDir);