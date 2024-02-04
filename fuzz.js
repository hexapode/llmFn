const fs = require('fs/promises');


const {loadTask} = require('./src/loader.js');

const evaluate = require('./src/evaluate.js');
const fuzz = require('./src/fuzzer.js');


async function runTask(taskDir, file, outDir, doRMSE=false) {

    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK);

    let code = await fs.readFile(file, 'utf8');
    console.log(TASK);

    if (doRMSE) {
        // copy task to NTask


        TASK.dataset.evaluatorOrder = 'lowerIsBetter';


        TASK.dataset.evaluator = 'RMSE';

    }
    let res = await evaluate(code, TASK);

    res.code = code;
    console.log(res.score);
    for (let i = 1; i <= 16; i++)  {
        res = await fuzz(res, TASK, 100000, i, 1, null, null, outDir, 0, false);
        await fs.writeFile(outDir + '/codeFZ_final.js', res.code);
    }
    console.log('over')
}



let taskDir = process.argv[2];
let file = process.argv[3];
let outDir = process.argv[4];
runTask(taskDir, file, outDir, true);