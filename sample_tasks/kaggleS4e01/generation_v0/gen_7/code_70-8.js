/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = 0.00;
if (Gender === 'Female') {
    genderImpact = 1.50;
} else {
    genderImpact = -0.75;
}

// ... (calculate other impacts)

let linearCombination = (
    // ... (previous code)
    + coefficients.GenderImpact * genderImpact
    // ... (continue with other impacts)
);

// ... (rest of the function)
