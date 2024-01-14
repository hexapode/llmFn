/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = (Gender === 'Male' ? 2.32 : -2.23);

let linearCombination = (
    // ... (previous linear combination) +
    coefficients.GenderImpact * genderImpact
);

// ... (return statement as previous)