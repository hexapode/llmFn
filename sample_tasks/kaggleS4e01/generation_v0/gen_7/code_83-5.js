/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code remains the same)

let genderImpact = (Gender === 'Male') ? 0.75 : -0.85;

// ... (previous code remains the same)

let linearCombination = (
    // ... (previous calculation code)
    + coefficients.GenderImpact * genderImpact
    // ... (remaining calculation code as before)
);

// ... (remaining code remains the same)
