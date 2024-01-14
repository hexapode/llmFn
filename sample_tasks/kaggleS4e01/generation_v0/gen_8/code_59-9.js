/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

const genderImpact = (Gender === 'Female') ? 0.46 : -0.03;

// ... (after previous code)

let weightedSum = (CreditScore * creditScoreWeight) +
    (Age * ageWeight) +
    (Balance * balanceWeight) +
    (geographyWeight) +
    (genderImpact) +  // Incorporating gender impact
    (Tenure * tenureWeight) +
    (IsActiveMember * isActiveMemberWeight) +
    // ... (other calculations)
