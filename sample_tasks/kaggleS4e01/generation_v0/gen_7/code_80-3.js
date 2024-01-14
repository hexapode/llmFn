/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 2.44;
} else if (Gender === 'Female') {
    genderImpact = -2.36;
}

// ... (inside linear combination)
+ coefficients.GenderImpact * genderImpact

// ... (rest of the code)
