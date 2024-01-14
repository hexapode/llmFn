/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = 0.00;

if (Gender === 'Male') {
    genderImpact = 0.45;  // coefficient for Male gender
} else {
    genderImpact = -0.30;  // coefficient for Female gender
}

// ... (other computations)

let linearCombination = (
    // ... (previous linear combination) +
    coefficients.GenderImpact * genderImpact
    // ... (other coefficients and impacts)
);

// ... (remaining code)
