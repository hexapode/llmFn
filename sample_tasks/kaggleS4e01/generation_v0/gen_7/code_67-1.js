/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.23;  // Considered positive impact for being male
} else {
    genderImpact = -0.92;  // Considered negative impact for being female
}

// Add the gender impact to the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;
