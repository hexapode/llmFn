/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

const coefficients = {
    // ... (other coefficients)
    GenderImpact: 0.72, 
    // ... (other coefficients)
};

// ... (previous code)

let genderImpact = coefficients.GenderImpact * (Gender === 'Male' ? 1.00 : -1.00);
linearCombination += genderImpact;

// ... (previous code)
