/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (other parameter calculations)

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.50;  // Assign a positive impact for Male
} else {
    genderImpact = -1.20;  // Assign a negative impact for Female
}

// ... (other calculations)

let linearCombination = (
    // ... (other parameter calculations)
    + coefficients.GenderImpact * genderImpact
    // ... (other calculations)
);
