/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = (Gender === 'Male') ? 0.86 : -0.92;

let linearCombination = (
    // ... (previous code)
    + coefficients.GenderImpact * genderImpact
    // ... (remaining code)
);

// ... (remaining code)
