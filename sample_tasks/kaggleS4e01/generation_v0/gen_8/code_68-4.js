/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const genderImpact = (Gender === 'Female') ? 0.15 : -0.08;

    // Add gender impact to the weighted sum calculation
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        genderImpact +  // Include the impact of gender
        (Tenure * tenureWeight) +
        // ... (other calculations)

    // Rest of the function remains unchanged

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
