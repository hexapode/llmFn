/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights and calculations remain unchanged
    // ...

    const genderImpact = (Gender === 'Female') ? 0.23 : -0.04;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderImpact) + // Incorporating the impact of gender
        (Tenure * tenureWeight) +
        // Other existing weighted calculations continue...

    // Remaining code remains unchanged
    // ...

    return probability;
}
