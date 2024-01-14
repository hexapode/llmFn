/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (other parts of the function remain unchanged)

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.50;
} else {
    genderImpact = -1.20;
}

// ... (other parts of the function remain unchanged)

let linearCombination = (
    // ... (previous linear combination calculation remain unchanged)
    coefficients.GenderImpact * genderImpact +
    // ... (continue with other parameters)
);

// ... (other parts of the function remain unchanged)
