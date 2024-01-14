/** // 0.5313758188765244 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyFactor = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? 0.1 : 0;
    const genderFactor = (Gender === 'Female') ? 0.1 : 0;
    const activityFactor = (IsActiveMember === 1) ? -0.2 : 0;
    
    const weightedSum = (CreditScore * 0.01) + 
        (Age * 0.02) - 
        (Balance * 0.000001) + 
        (Tenure * 0.05) + 
        (NumOfProducts * 0.1) + 
        (HasCrCard * (-0.1)) + 
        geographyFactor + 
        genderFactor + 
        activityFactor;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
