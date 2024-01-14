/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

const genderImpact = (Gender === 'Female') ? 0.4 : 0.0;

// Include genderImpact in the weighted sum calculation
let weightedSum = (CreditScore * creditScoreWeight) +
    (Age * ageWeight) +
    (Balance * balanceWeight) +
    (geographyWeight) +
    (genderWeight + genderImpact) +  // Including impact of gender
    (Tenure * tenureWeight) +
    (IsActiveMember * isActiveMemberWeight) +
    // ... (other terms remain unchanged)
