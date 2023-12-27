const fs = require('fs/promises');
const {parse} = require('csv-parse/sync');

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
        TASK.functionnSignature = `${TASK.functionName}(${OCRText})`;
    }
    if (TASK.dataset.type == "kaggleTabular") {
        TASK.dataSet = [];

        let trainingTxt = await fs.readFile(`${TASK.taskDir}/dataset/train.csv`, 'utf8');
        const trainingData = parse(trainingTxt, {
            columns: true,
            skip_empty_lines: true
        });
        let parameters = { ...trainingData[0]};
        delete parameters[TASK.dataset.output];
        delete parameters.id;
        TASK.parameters = Object.keys(parameters);
        TASK.functionnSignature = `${TASK.functionName}(${TASK.parameters.join(', ')})`;
        for (let item of trainingData) {
            let output = item[TASK.dataset.output];
            delete item[TASK.dataset.output];
            let input = [];
            for (let key of TASK.parameters) {
                input.push(item[key]);
            }
            TASK.dataSet.push({input, output });
        }
    }
}


module.exports = {
    loadTask
}