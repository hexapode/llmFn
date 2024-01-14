/** // 0.49820461706139196 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : 0;
    const genderImpact = (Gender === 'Female') ? 0.2 : 0;
    const tenureImpact = -0.1;
    const isActiveMemberImpact = -0.5;

    const weightedSum = CreditScore * 0.1 + Age * 0.05 + Balance * 0.3 + geographyImpact + genderImpact + Tenure * tenureImpact + IsActiveMember * isActiveMemberImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
