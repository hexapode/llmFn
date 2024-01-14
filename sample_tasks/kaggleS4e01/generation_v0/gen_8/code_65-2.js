/** // 0.680896408831682 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.35 : (Geography === 'Spain') ? -0.25 : 0.00;
    const genderImpact = (Gender === 'Female') ? 0.40 : 0.00;
    const ageImpact = Age * 0.08;
    const tenureImpact = Tenure * -0.05;
    const isActiveMemberImpact = IsActiveMember * -0.85;
    const balanceNumOfProductsInteraction = Balance * NumOfProducts * 0.00003;
    const hasCrCardImpact = HasCrCard * -0.12;
    const creditScoreImpact = CreditScore * 0.0003;
    const estimatedSalaryImpact = EstimatedSalary * 0.0000002;

    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + isActiveMemberImpact + balanceNumOfProductsInteraction + hasCrCardImpact + creditScoreImpact + estimatedSalaryImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
