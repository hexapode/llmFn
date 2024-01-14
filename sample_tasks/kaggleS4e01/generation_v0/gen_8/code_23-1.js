/** // 0.4982007129538526 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.59 : -0.19;
    const genderImpact = (Gender === 'Female') ? 0.42 : -0.10;
    const activeMemberImpact = (IsActiveMember === 1) ? -0.91 : 0;
    const balanceImpact = Balance * 0.0001;
    const productImpact = NumOfProducts * -0.65;
    const ageImpact = Age * 0.02;

    const weightedSum = 0.11 * CreditScore - 0.1 * Age + geographyImpact + genderImpact - 0.5 * Tenure + balanceImpact + productImpact + activeMemberImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
