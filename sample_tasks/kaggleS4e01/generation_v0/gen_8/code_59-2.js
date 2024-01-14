/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code...
    
    const genderImpact = (Gender === 'Female') ? 0.33 : -0.02;
    
    const weightedSum = // ... (existing calculation without genderImpact) + (genderImpact);
    
    const probability = 1.21 / (0.94 + Math.exp(-weightedSum));

    return probability;
}
