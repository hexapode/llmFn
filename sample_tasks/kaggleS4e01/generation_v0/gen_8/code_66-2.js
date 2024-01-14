/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code for other parameter computations)

    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;

    // Incorporate genderWeight into the weighted sum calculation
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +  // Include genderWeight here
        (Tenure * tenureWeight) +
        // ... (other parameter calculations)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15657535.00, 'Pearson', 656.00, 'France', 'Male', 29.00, 10.00, 0.00, 1.00, 1.00, 0.00, 51907.72));
