/** // 0.740247368642015 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const ageImpact = Age * 0.05;
    const tenureImpact = Tenure * 0.01;
    const balanceImpact = Balance * 0.000002;
    const numProductsImpact = NumOfProducts * 0.2;
    const creditScoreImpact = CreditScore * 0.0005;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.1 : 0;
    const salaryImpact = EstimatedSalary * 0.0000002;
    const churnProbability = 0.2 + geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + numProductsImpact + creditScoreImpact + isActiveMemberImpact + salaryImpact;

    return churnProbability;
}
