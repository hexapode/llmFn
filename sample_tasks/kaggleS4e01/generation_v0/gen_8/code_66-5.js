/** // 0.6965966812220835 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.1 : (Geography === 'Spain') ? -0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.2 : 0;
    const ageImpact = Age * 0.02;
    const tenureImpact = Tenure * -0.02;
    const balanceImpact = Balance * 0.00001;
    const numOfProductsImpact = (NumOfProducts > 2) ? 0.2 : -0.2;
    const creditScoreImpact = CreditScore * 0.0001;
    const isActiveMemberImpact = (IsActiveMember === 0) ? -0.3 : 0;
    const estimatedSalaryImpact = EstimatedSalary * 0.0000001;

    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numOfProductsImpact + creditScoreImpact + isActiveMemberImpact + estimatedSalaryImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
