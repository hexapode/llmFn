/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.50;  // Assuming a positive impact for Male
} else {
    genderImpact = -1.00;  // Assuming a negative impact for Female
}

// ... (previous code)

let linearCombination = (
    // ... (previous code)
    coefficients.GenderImpact * genderImpact +
    // ... (previous code)
);

// ... (rest of the code)
