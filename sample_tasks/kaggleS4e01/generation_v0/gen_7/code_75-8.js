/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = -0.21;
} else {
    genderImpact = 0.32;
}

// ... (previous code)

let linearCombination = (
    // ... (previous code) 
    // Add the impact of gender to the linear combination
    coefficients.GenderImpact * genderImpact +
    // ... (remaining code)
);

// ... (remaining code)
