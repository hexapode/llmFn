/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... other parameters and coefficients

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 2.56;  // Assigning a higher coefficient for male
} else {
    genderImpact = -2.36;  // Assigning a lower coefficient for female
}

// ... other computations

let linearCombination = (
    // ... other terms
    coefficients.GenderImpact * genderImpact +
    // ... other terms
);

// ... rest of the function
