const fs = require('fs/promises');

const OpenAI = require('openai');

const {loadTask} = require('./src/loader.js');
const {execQueue} = require('./src/queue.js');

const evaluate = require('./src/evaluate.js');
const fuzz = require('./src/fuzzer.js');

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});


let ROUND = 20;
FACTOR_PER_ROUND = 10;
let MODEL = 'gpt-3.5-turbo-1106';
// let MODEL = 'gpt-4-1106-preview';


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

    let ideas = [];

    let seedMessage = [{
        role: "system",
        content: `You are a datascientist, working on: ${TASK.goal}. \
Imagine what could be ${FACTOR_PER_ROUND} factors that could influence the resukt of this prediction. 
Output in a JSON hashmap with the name of the factor as key and a description as value. The key should not contain number.
The key should be astring containing only letters, numbers and underscores, and starting by a letter as it will be used as a JS function name.`
    }, {
        role: "user",
        content: `Do it!`
}];

     let chatCompletion = await openai.chat.completions.create({
        messages: [...seedMessage],
        model: MODEL,
    });
    let texts = [chatCompletion.choices[0].message.content];
    let i = 0;
    
    while (i < ROUND) {
        seedMessage.push(chatCompletion.choices[0].message);
        seedMessage.push({
            role: "user",
            content: `${FACTOR_PER_ROUND} more`
        });
        chatCompletion = await openai.chat.completions.create({
            messages: [...seedMessage],
            model: MODEL,
        });
        texts.push(chatCompletion.choices[0].message.content);
        ++i
    }

    for (let text of texts) { 
        console.log(text);
        try {
            let data = JSON.parse(text);
            for (let key in data) {
                ideas.push({key, description: data[key]});
            }
        } catch (e) {
            console.log('failed parsing JSON', text);
         }
    }
    for (let idea of ideas) { 
        // transform the key into a valid JS function name
        idea.key = idea.key.replace(/[^a-zA-Z0-9_]/g, '_');
    }

    console.log(ideas);
    await fs.writeFile(outDir + '/ideas.json', JSON.stringify(ideas, null, 2));
    let finalCode = "";

    let finalFunction = "return "
    let first = true;
    for (let idea of ideas) {

         let MainPrompt = `You are a programmer, and you need to build a javascript funtion to evaluate the following factor:
${idea.key} : ${idea.description}
To solve this task you need to create a javascript function name ${idea.key} that take into parameters ${TASK.input} and return the probability of ${idea.description}.
Output the code between \`\`\`javascript and \`\`\` tags.
Do not add usage sample code, only output the functions.
Try to compute the probability to the best of your ability based on the parameters inputs! DO NOT Output Placeholder CODE! Actually implement the function!
Your are not allow to use any external library or call any external service/library/function.
The function should be named ${idea.key}  and its signature should be ${TASK.functionSignature.replace(TASK.functionName, idea.key)}.
The function should be deterministic, it should always return the same output for a given input.
The function should contain calculations, not just a lookup table.
Compute your prediction in the function, and return them at the end of the function. Do not return value before end of function.
The function should not contain calls to a neural network or machine learning model.
The parameter of the function are all you have, try to be creative and use them to compute the probability. You need to have actual code calculating a probability based on the parameters even if it's a longshot!
Here is a sample input:
${renderSample(TASK.dataSet[TASK.dataSet.length * Math.random() | 0], TASK)}
`;

       let chatCompletion =  await  openai.chat.completions.create({
            messages: [{ role: "system", "content": MainPrompt},
             {role: "user", "content": "Write a JS function for probability of " + idea.key + " based on " + idea.description + ""}],
            model: MODEL,
        });

        console.log(MainPrompt);

        console.log(chatCompletion.choices[0].message.content);

            // extract the code from the response with a regexp, it's contain between ```javascript and ``` blocks
        let codeBlocks = [...chatCompletion.choices[0].message.content.matchAll(/```javascript([\s\S]*?)```/g)];
        let codes = codeBlocks.map(match => match[1]);
        let code = codes.join('\n\n');

        try {
            eval(code);
            console.log('e1');
            let fn = eval(code + ';' +idea.key);
            console.log('e2');
            let NTask = {...TASK};
            NTask.functionName = idea.key;
            let sr = await evaluate(fn, NTask); 

            console.log('e3');
            console.log(sr.score);

            if (sr.score == Infinity || sr.score == -Infinity) { 
                console.log('failed to evaluate');
                throw new Error('failed to evaluate');
            }
            sr.code = code;
            let res = await fuzz(sr, NTask, 50, 3, NTask.fuzzerPct);
            console.log(res.score, res.code);
            finalCode += res.code;
            if (!first) {
                finalFunction += ' + ';
            }
            first = false;
            finalFunction += `${TASK.functionSignature.replace(TASK.functionName, idea.key)} * ${1.0/ideas.length}
`;
        }
        catch (e) {
     
        }

    }

    finalCode += `

function ${TASK.functionSignature} {
    ${finalFunction};
}
    `

    await fs.writeFile(outDir + '/best.js', finalCode);

    let res = await evaluate(finalCode, TASK);
    res.code = finalCode;
    console.log(res.score);

    let rf = await fuzz(res, TASK, 10000000, 8, TASK.fuzzerPct, null, null, outDir);
    await fs.writeFile(outDir + '/codeFZ_final.js', rf.code);

}   


function renderSample(sample, TASK) { 
    let newSample= {...sample};
    for (let i = 0; i < newSample.input.length; i++) {
        newSample.input[i] = `${TASK.parameters[i]}=${newSample.input[i]}`;
    }

    return 'The result is ' + newSample.output + ' for: ' + newSample.input.join(', ') + '.';
}



let taskDir = process.argv[2] || `./sample_tasks/KaggleS3e25`;
let gen = parseInt(process.argv[3]) || 0;
runTask(taskDir, gen);