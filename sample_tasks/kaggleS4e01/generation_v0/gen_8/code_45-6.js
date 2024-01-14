/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.2 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const activityImpact = (IsActiveMember === 1) ? -0.2 : 0;
    const productImpact = (NumOfProducts > 2) ? 0.3 : 0;
    
    const score = CreditScore * 0.1 + Age * 0.05 + Tenure * 0.08 + Balance * 0.1 +
        HasCrCard * 0.05 + EstimatedSalary * 0.000001;
    
    const weightedSum = score + geographyImpact + genderImpact + activityImpact + productImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
