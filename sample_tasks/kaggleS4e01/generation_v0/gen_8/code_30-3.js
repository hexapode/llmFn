/** // 0.593936685767794 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const ageImpact = Age * 0.01;
    const tenureImpact = Tenure * 0.05;
    const balanceImpact = Balance * 0.0001;
    const numOfProductsImpact = NumOfProducts * 0.1;
    const creditScoreImpact = CreditScore * 0.002;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.2 : 0;
    const estimatedSalaryImpact = EstimatedSalary * 0.000001;

    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numOfProductsImpact + creditScoreImpact + isActiveMemberImpact + estimatedSalaryImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
