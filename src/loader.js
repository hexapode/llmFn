const fs = require('fs/promises');
const {parse} = require('csv-parse/sync');

async function loadTask(TASK, requireTest=false) { 
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

        let parametersMap = {};
        for (let parameter in parameters) {
            parametersMap[parameter] = parameter;
            // test if parameter start with a number
            if (parameter.match(/^\d/)) {
                parametersMap[parameter] = `_${parameter}`;
            }
            // test if parameter is a reserved word
            if (parameter.match(/^(var|let|const|function|if|else|for|while|do|switch|case|break|continue|return|try|catch|finally|new|delete|throw|typeof|instanceof|void)$/)) {
                parametersMap[parameter] = `_${parameter}`;
            }
            // test if parameter contain spaces
            if (parameter.match(/\s/)) {
                parametersMap[parameter] = `${parameter.replace(/\s/g, '_')}`;
            }
        }    


        TASK.parameters = [];
        for (let key in parametersMap) {
            TASK.parameters.push(parametersMap[key]);
        }
        TASK.realParameters = Object.keys(parameters);
        TASK.functionnSignature = `${TASK.functionName}(${TASK.parameters.join(', ')})`;
        for (let item of trainingData) {
            let output = item[TASK.dataset.output];
            delete item[TASK.dataset.output];
            let input = [];
            for (let key of TASK.realParameters) {
                input.push(item[parametersMap[key]]);
            }
            TASK.dataSet.push({input, output });
        }

        if (requireTest) {
            TASK.testDataSet = [];

            let testTxt = await fs.readFile(`${TASK.taskDir}/dataset/test.csv`, 'utf8');
            const testData = parse(testTxt, {
                columns: true,
                skip_empty_lines: true
            });

            for (let item of testData) {
                let input = [];
                for (let key of TASK.realParameters) {
                    input.push(item[parametersMap[key]]);
                }
                TASK.testDataSet.push({input, id: item.id });
            }
        }
    }
}


module.exports = {
    loadTask
}