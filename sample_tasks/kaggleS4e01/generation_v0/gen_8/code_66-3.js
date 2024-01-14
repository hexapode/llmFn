/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const genderImpact = (Gender === 'Female') ? 0.13 : -0.09;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderImpact) +  // Incorporating gender impact into the weighted sum
        (Tenure * tenureWeight) +
        // ... (rest of the calculation remains the same)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15657535.00, 'Pearson', 656.00, 'France', 'Male', 29.00, 10.00, 0.00, 1.00, 1.00, 0.00, 51907.72));
