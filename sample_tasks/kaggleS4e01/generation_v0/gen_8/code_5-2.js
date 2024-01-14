/** // 0.5490336665555599 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyFactor = (Geography === 'Germany') ? 1 : 0;
    const genderFactor = (Gender === 'Female') ? 1 : 0;
    const isActiveMemberFactor = (IsActiveMember === 1) ? -1 : 0;

    const weightedSum = (CreditScore * 0.05) + (Age * 0.1) + (Balance * 0.001) - (Tenure * 0.02) + (NumOfProducts * -0.05) + (geographyFactor * 0.2) + (genderFactor * 0.1) + (isActiveMemberFactor * 0.5);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
