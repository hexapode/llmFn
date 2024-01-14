/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... [existing code]

    // Impact of gender on the prediction
    const genderImpact = (Gender === 'Female') ? 0.09 : -0.03;  // Adjust the impact based on the specific data

    // Update the weighted sum with the impact of gender
    weightedSum = weightedSum + (genderImpact * Math.sqrt(CreditScore));

    // ... [remaining code]

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
