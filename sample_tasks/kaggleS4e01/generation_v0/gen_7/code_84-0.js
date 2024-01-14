/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.50; // Positive impact for Male gender
} else {
    genderImpact = -2.00; // Negative impact for Female gender
}

// Add genderImpact to the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;
