/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Considering the impact of the Gender parameter on prediction
let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = -0.24;
} else {
    genderImpact = 0.15;
}

// Update linear combination with genderImpact
linearCombination += coefficients.GenderImpact * genderImpact;
