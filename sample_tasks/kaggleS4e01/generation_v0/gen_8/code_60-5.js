/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;

    // ... (rest of the code remains unchanged)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +  // Include gender weight here
        (Tenure * tenureWeight) +
        // ... (rest of the calculations remain unchanged)
        
    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15662955.00, 'Maclean', 678.00, 'France', 'Female', 35.00, 8.00, 0.00, 2.00, 1.00, 1.00, 170483.90));
