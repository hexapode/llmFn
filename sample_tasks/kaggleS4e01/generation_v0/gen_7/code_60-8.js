/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let linearCombination = (
    // ... (previous coefficients)
    coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.33) +
    // ... (remaining coefficients)
);

// ... (remaining code)
