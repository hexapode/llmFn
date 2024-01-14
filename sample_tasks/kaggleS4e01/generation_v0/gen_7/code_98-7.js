/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 2.56;
} else {
    genderImpact = -2.36;
}

// Then include the genderImpact in the linearCombination calculation
coefficients.GenderImpact * genderImpact +
