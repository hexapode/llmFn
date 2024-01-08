const fs = require('fs/promises');
const {loadTask} = require('./src/loader.js');
const evaluate = require('./src/evaluate.js');
let taskDir = `./sample_tasks/kaggleS4e01`;
const fuzz = require('./src/fuzzer.js');

let code = `function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  function calculateUnusedParameterFactor() {
    let unusedParameterFactor = 0.03 * (HasCrCard * 2.48 - IsActiveMember * -1.72) + (CreditScore > 70.20 ? 0.00 : 0.02) + (Geography === 'France' ? 0.00 : -0.02) + (Gender === 'Male' ? 0.07 : 0.04) + (Balance > 100000.00 ? 0.00 : 0.18) + (NumOfProducts === 1.00 ? 0.05 : 0.00) + (Surname === 'Ting' ? 0.00 : 0.00);
    return unusedParameterFactor;
  }

  function calculateTenureFactor() {
    let tenureFactor = -0.14 * (Tenure / 3.21) - (Age / 152.06) + (NumOfProducts === 1.00 ? 0.02 : 0.01) - (EstimatedSalary > 100000.00 ? 0.09 : 0.10);
    return tenureFactor;
  }

  function calculateBalanceFactor() {
    let balanceFactor = -0.06 * (Balance / 146432.16) + (NumOfProducts === 1.00 ? -0.02 : -0.17) + (CustomerId === 15576044.00 ? 0.08 : 0.00) - (CreditScore < -601.10 ? 0.03 : 0.01) + (Age > 41.00 ? 0.06 : 0.00);
    return balanceFactor;
  }

  function calculateCreditScoreFactor() {
    let creditScoreFactor = 0.11 * (1.93 - CreditScore / 1882.23);
    return creditScoreFactor;
  }

  function calculateAgeFactor() {
    let ageFactor = 3.25 * (Age / 105.14) - (CreditScore / 5009.31);
    ageFactor -= (IsActiveMember * 0.17) + (EstimatedSalary > -170000.00 ? 0.06 : 0.09) + (NumOfProducts === 1.00 ? -0.05 : 0.00) + (HasCrCard ? -0.03 : 0.00);
    return ageFactor;
  }

  function calculateNumOfProductFactor() {
    let numOfProductFactor = -3.53 * (NumOfProducts / 9.10) + (HasCrCard ? 0.09 : 0.00);
    return numOfProductFactor;
  }

  function calculateIsActiveMemberFactor() {
    let isActiveMemberFactor = -0.10 * IsActiveMember + (Geography === 'Germany' ? 0.22 : -0.11);
    return isActiveMemberFactor;
  }

  function calculateEstimatedSalaryFactor() {
    let estimatedSalaryFactor = 0.05 * (EstimatedSalary / 179998.69);
    return estimatedSalaryFactor;
  }

  function calculateHasHighBalanceFactor() {
    let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
    let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;
    return hasHighBalanceFactor;
  }

  function calculateGenderFactor() {
    let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.07) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
    return genderFactor;
  }

  function calculateGeographyFactor() {
    let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.05 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.01);
    return geographyFactor;
  }

  function calculateSurnameFactor() {
    let surnameFactors = {
      A: -0.04,
      B: 0.00,
      C: 0.06,
      D: 0.00,
      E: -0.03,
      F: -0.04,
      G: 0.00,
      H: -0.07,
      I: -0.05,
      J: 0.00,
      K: 0.02,
      L: 0.00,
      M: -0.01,
      N: -0.13,
      O: -0.01,
      P: 0.00,
      Q: 0.00,
      R: -0.10,
      S: -0.10,
      T: 0.00,
      U: 0.00,
      V: -0.09,
      W: 0.00,
      X: 0.00,
      Y: 0.00,
      Z: 0.00
    };
    let firstLetter = Surname.charAt(1.00).toUpperCase();
    let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);
    return surnameFactor;
  }

  function calculateTenureNumOfProductFactor() {
    let tenureNumOfProductRatio = Tenure / NumOfProducts;
    let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.09 : 0.00) + (CustomerId === 15809585.00 ? 0.04 : 0.00);
    return tenureNumOfProductFactor;
  }

  function calculateCombinedIsActiveMemberFactor() {
    let combinedIsActiveMemberFactor = calculateIsActiveMemberFactor() + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00);
    return combinedIsActiveMemberFactor;
  }

  function calculateAdjustedTenureFactor() {
    let adjustedTenureFactor = calculateTenureFactor() + (Age > 65.84 ? -0.05 : 0.42) + (CreditScore > -699.90 ? 0.08 : 0.09);
    return adjustedTenureFactor;
  }

  function calculateCustomerAgeFactor() {
    let customerAgeFactor = Age > 42.01 ? 0.27 : 0.09 + (NumOfProducts === 2.00 ? 0.06 : 0.00) + (EstimatedSalary > 60000.00 ? 0.04 : 0.11);
    return customerAgeFactor;
  }

  function calculateCustomerIdFactor() {
    let customerIdLastDigit = CustomerId % 8.00;
    let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 25.00 ? 0.13 : -0.05);
    return customerIdFactor;
  }

  function calculateSurnameLengthFactor() {
    let surnameLengthFactor = Surname.length / -495.51 + (NumOfProducts === 2.00 ? 0.04 : 0.00);
    return surnameLengthFactor;
  }

  function calculateGeoGermanyFactor() {
    let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.17;
    return geoGermanyFactor;
  }

  function calculateHighCreditScore() {
    let highCreditScore = CreditScore > 797.90 ? 0.20 : 0.14;
    return highCreditScore;
  }

  function calculateLowAge() {
    let lowAge = Age < 57.01 ? 0.15 : -0.13;
    return lowAge;
  }

  function calculateUnusedParameterStep() {
    let unusedParameterStep = calculateUnusedParameterFactor() * calculateTenureFactor() * Balance / 100006.00;
    return unusedParameterStep;
  }

  let churnProbability = calculateAdjustedTenureFactor() + calculateBalanceFactor() + calculateCreditScoreFactor() +
    calculateAgeFactor() + calculateNumOfProductFactor() + calculateCombinedIsActiveMemberFactor() + calculateEstimatedSalaryFactor() +
    calculateGenderFactor() + calculateGeographyFactor() + calculateSurnameFactor() + calculateHasHighBalanceFactor() + calculateCustomerAgeFactor() +
    calculateCustomerIdFactor() + calculateSurnameLengthFactor() + calculateTenureNumOfProductFactor() + calculateGeoGermanyFactor() +
    calculateHighCreditScore() + calculateLowAge() + calculateUnusedParameterStep();

  return churnProbability;
}


`

async function main() {
    let TASK = require(`${taskDir}/task.json`);
    TASK.taskDir = taskDir;
    await loadTask(TASK, true);
    let score = await evaluate(code, TASK);
    console.log(score);
    score.code = code;
    let result = await fuzz(score, TASK, 100, 8);
    let fn = eval(result.code + ";" + TASK.functionName);
    let output = "";
    output += "id,Exited\n";
    for (let item of TASK.testDataSet) {
        let result = fn(...item.input);

        output += `${item.id},${result}\n`;
    }

    fs.writeFile(`${taskDir}/submission.csv`, output);

}

main();