/** // 0.6097607013544563 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.05 : 0;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.2 : 0;
    
    const score = CreditScore * 0.01 + Age * 0.05 + Balance * 0.002 - Tenure * 0.01 - NumOfProducts * 0.1 + geographyImpact + genderImpact + isActiveMemberImpact;
    
    const probability = 1 / (1 + Math.exp(-score));
    
    return probability;
}
