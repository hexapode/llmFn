/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = (Gender === 'Male' ? 2.44 : -2.36);

// ... (previous code)

let linearCombination = (
    // ... (previous code)
    + coefficients.GenderImpact * genderImpact
    // ... (previous code)
);

// ... (previous code)