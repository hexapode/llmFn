/** // 0.37219657934009054 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyFactor = (Geography === 'Germany') ? 0.3 : 0;
    const genderFactor = (Gender === 'Female') ? 0.2 : 0;
    const activityFactor = (IsActiveMember === 1) ? -0.4 : 0;
    
    const weightedSum = CreditScore * 0.01 + Age * 0.1 + Balance * 0.001 + geographyFactor + genderFactor + Tenure * 0.02 + NumOfProducts * -0.1 + HasCrCard * -0.05 + activityFactor + EstimatedSalary * 0.00001;
    
    const probability = 1 / (1 + Math.exp(weightedSum));

    return probability;
}
