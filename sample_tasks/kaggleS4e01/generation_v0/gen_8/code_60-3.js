/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;

    // ... (existing code)

    let weightedSum = // ... (existing computation)
        + (genderWeight);  // Incorporate gender weight into the weighted sum

    // ... (existing code)

    return probability;  // Return the computed probability
}
