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
        let NTask = JSON.parse(JSON.stringify(TASK));

        NTask.dataset.evaluatorOrder = 'lowerIsBetter';


        NTask.dataset.evaluator = 'RMSE';
        let res2 = await evaluate(code, NTask);
        res2.code = code;
        // MSE
        let Ef = await fuzz(res2, NTask, 10000000, 5, TASK.fuzzerPct, null, null, outDir);
        code = Ef.code;

    }
    let res = await evaluate(code, TASK);

    res.code = code;
    console.log(res.score);
    for (let i = 2; i <= 16; i++)  {
        res = await fuzz(res, TASK, 10000000, i, TASK.fuzzerPct * 3, null, null, outDir);
        await fs.writeFile(outDir + '/codeFZ_final.js', res.code);
    }
    console.log('over')
}



let taskDir = process.argv[2];
let file = process.argv[3];
let outDir = process.argv[4];
runTask(taskDir, file, outDir, false);