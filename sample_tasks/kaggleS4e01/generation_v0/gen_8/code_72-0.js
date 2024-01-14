/** // 0.6750220673136338 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? 0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const tenureImpact = Tenure * 0.01;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.2 : 0;
    const creditScoreImpact = CreditScore * 0.0002;
    const ageImpact = Age * 0.005;
    const balanceImpact = Balance * 0.000005;
    const numOfProductsImpact = (NumOfProducts >= 3) ? 0.1 : -0.1;
    const hasCrCardImpact = (HasCrCard === 1) ? -0.05 : 0.05;
    const estimatedSalaryImpact = EstimatedSalary * 0.0000001;

    const weightedSum = geographyImpact + genderImpact + tenureImpact + isActiveMemberImpact + creditScoreImpact + ageImpact + balanceImpact + numOfProductsImpact + hasCrCardImpact + estimatedSalaryImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
