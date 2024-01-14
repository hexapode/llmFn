/** // 0.417734057733307 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? -0.1 : -0.05;
    const genderImpact = (Gender === 'Female') ? 0.15 : 0;
    const activityImpact = (IsActiveMember === 1) ? -0.2 : 0;
    const productsImpact = (NumOfProducts < 3) ? -0.3 : 0.1;

    const weightedSum = 0.1 * CreditScore + 0.05 * Age - 0.1 * Tenure - 0.05 * Balance + geographyImpact + genderImpact + activityImpact + productsImpact;

    return 1 / (1 + Math.exp(-weightedSum));
}

const result = PredictExited(15663888.00, "Tuan", 681.00, "France", "Male", 37.00, 3.00, 0.00, 2.00, 1.00, 0.00, 104769.96);
console.log(result);
