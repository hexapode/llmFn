/** // 0.6632608369483104 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : 0;
    const genderImpact = (Gender === 'Female') ? 0.2 : 0;
    const ageImpact = Age * 0.01;
    const tenureImpact = Tenure * 0.02;
    const balanceImpact = Balance * 0.00001;
    const creditScoreImpact = CreditScore * 0.001;
    const productsImpact = NumOfProducts * 0.05;
    const cardMemberImpact = (HasCrCard & IsActiveMember) ? -0.1 : 0;
    const salaryImpact = EstimatedSalary * 0.0000002;

    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + creditScoreImpact + productsImpact + cardMemberImpact + salaryImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
