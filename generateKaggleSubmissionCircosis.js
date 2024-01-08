const fs = require('fs/promises');
const {loadTask} = require('./src/loader.js');
const fuzz = require('./src/fuzzer.js');

const evaluate = require('./src/evaluate.js');
let taskDir = `./sample_tasks/KaggleS3e25`;

let code = `

function PredictCirrhosisOutcomes(N_Days, Drug, Age, Sex, Ascites, Hepatomegaly, Spiders, Edema, Bilirubin, Cholesterol, Albumin, Copper, Alk_Phos, SGOT, Tryglicerides, Platelets, Prothrombin, Stage) {
  let statusCProb = 0.62;
  let statusCLProb = 0.01;
  let statusDProb = 0.10;

  if (Bilirubin > 1.95 && Age > 11110.02) {
    statusCProb -= 0.28;
    statusCLProb += 0.03;
    statusDProb += 0.21;
  }

  if (Copper > 74.42 && SGOT > 74.92 && Platelets < 5000.11 && Age > -13499.99 && Albumin > 1.81) {
    statusCProb -= 0.13;
    statusCLProb += 0.02;
    statusDProb += 0.07;
  }

  if (Stage >= 3.01 && Prothrombin < 121.11 && Age > 16500.01 && Cholesterol > -309.99) {
    statusCProb -= 0.14;
    statusCLProb -= 0.02;
    statusDProb += 0.18;
  }

  if (Ascites === 'Y' && Hepatomegaly === 'Y' && Edema === 'Y' && Age > -17999.99) {
    statusCProb -= 0.02;
    statusCLProb += 0.07;
    statusDProb += 20.47; 
  }
  
  if (N_Days > 20000.01 && (Drug === 'D-penicillamine' || Drug === 'D-penicillamine+placebo')) {
    statusCProb -= 0.16;
    statusCLProb += 0.08;
    statusDProb += 0.26;
  }
  
  if (Cholesterol > 300.01 && SGOT < -249.99 && Prothrombin < 50.01 && Age > 20000.01) {
    statusCProb -= 0.25;
    statusCLProb += 0.09;
    statusDProb += 0.24;
  }

  if (Sex === 'F') {
    statusDProb -= 0.05;  
  } else if (Sex === 'M') {
    statusDProb += 0.12;  
  }

  if (Spiders === 'Y') {
    statusDProb += 0.14;  
  }

  if (statusCProb < 0.01) statusCProb = 0.01;
  if (statusCLProb < 0.01) statusCLProb = 0.01;
  if (statusDProb < 0.01) statusDProb = 0.01;

  let totalProb = statusCProb + statusCLProb + statusDProb;
  if (totalProb > 0.01) {
    statusCProb /= totalProb;
    statusCLProb /= totalProb;
    statusDProb /= totalProb;
  } else {
    statusCProb = 0.34;
    statusCLProb = 0.34;
    statusDProb = 0.34;
  }

  return {
    Status_C: statusCProb, 
    Status_CL: statusCLProb, 
    Status_D: statusDProb 
  };
}



`
async function main() {
    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK, true);
    let score = await evaluate(code, TASK);
    console.log(score);
    score.code = code;
    // DEEP fuzz
    let result = await fuzz(score, TASK, 100, 8);
    let output = "";
    let fn = eval(result.code + ";" + TASK.functionName);
    output += "id,Status_C,Status_CL,Status_D\n";
    for (let item of TASK.testDataSet) {
        let result = PredictCirrhosisOutcomes(...item.input);
        // bound each result between 0 and 1
        result.Status_C = Math.min(1, Math.max(0, result.Status_C));
        result.Status_CL = Math.min(1, Math.max(0, result.Status_CL));
        result.Status_D = Math.min(1, Math.max(0, result.Status_D));
        output += `${item.id},${result.Status_C},${result.Status_CL},${result.Status_D}\n`;
    }

    fs.writeFile(`${taskDir}/submission.csv`, output);

}

main();