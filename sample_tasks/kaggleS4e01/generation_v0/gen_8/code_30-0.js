/** // 0.5453327150066797 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const ageImpact = Age * 0.01;
    const balanceImpact = Balance * 0.001;
    const tenureImpact = Tenure * 0.005;
    const activeMemberImpact = (IsActiveMember === 1) ? -0.1 : 0;
    
    const weightedSum = CreditScore * 0.001 - Age * 0.01 + geographyImpact + genderImpact + balanceImpact + tenureImpact + activeMemberImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
