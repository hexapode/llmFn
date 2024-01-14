/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Include the impact of the Gender parameter in the linear combination
let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 0.61;
} else {
    genderImpact = -0.72;
}

// Add the impact of Gender to the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;
