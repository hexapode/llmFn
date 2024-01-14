/** // 0.6990668000905428 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? -0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.15 : 0;
    const ageImpact = Age * 0.05;
    const tenureImpact = Tenure * -0.02;
    const balanceImpact = Balance * 0.00002;
    const numOfProductsImpact = (NumOfProducts < 3) ? -0.3 : 0.15;
    const creditScoreImpact = CreditScore * 0.0001;
    const salaryImpact = EstimatedSalary * 0.0000002;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.25 : 0;
    const hasCrCardImpact = (HasCrCard === 1) ? -0.1 : 0;
    
    const weightedSum = geographyImpact + genderImpact + ageImpact + tenureImpact + balanceImpact + 
                        numOfProductsImpact + creditScoreImpact + salaryImpact + isActiveMemberImpact + hasCrCardImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
