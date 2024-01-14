/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;



    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +  // Adding genderWeight to the weighted sum calculation
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        // ... (remaining calculation remains the same)
