/** // 0.49330126575682987 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : (Geography === 'France') ? -0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const activityImpact = (IsActiveMember === 1) ? -0.5 : 0;
    const balanceAgeRatio = Balance / (Age + 1);
    const prediction = 0.4 + 0.05 * CreditScore - 0.1 * Age + 0.02 * Tenure - 0.1 * NumOfProducts + geographyImpact + genderImpact + activityImpact + 0.005 * EstimatedSalary - 0.2 * balanceAgeRatio;
    return Math.min(Math.max(prediction, 0), 1);
}
