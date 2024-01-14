/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// After considering the Gender parameter impact, we will add it to the linear combination as follows:

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.97;
} else {
    genderImpact = -1.84;
}

// Then add the gender impact to the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;

