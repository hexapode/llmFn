const fs = require('fs/promises');
const {loadTask} = require('./src/loader.js');
const evaluate = require('./src/evaluate.js');
let taskDir = `./sample_tasks/KaggleS3e25`;


function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
    var Status_C = 0.5;
    var Status_CL = 0.3;
    var Status_D = 0.2;

    // Perform calculations based on the input parameters to predict the probabilities

    return { Status_C, Status_CL, Status_D };
}


async function main() {
    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK, true);
    let score = await evaluate(PredictCirrhosisOutcomes, TASK);
    console.log(score);
    let output = "";
    output += "id,Status_C,Status_CL,Status_D\n";
    for (let item of TASK.testDataSet) {
        let result = PredictCirrhosisOutcomes(...item.input);

        output += `${item.id},${result.C},${result.CL},${result.D}\n`;
    }

    fs.writeFile(`${taskDir}/submission.csv`, output);

}

main();