/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Adding the impact of Gender parameter in the computation
// We will adjust the linear combination by adding the impact of the Gender parameter based on the value of 'Gender' provided.

// ...
let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 0.32;
} else {
    genderImpact = -0.17;
}

let linearCombination = (
    // ... (previous calculations)
    coefficients.GenderImpact * genderImpact +
    // ... (rest of the calculations)
);
// ... (rest of the function remains the same)

