/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ...

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 2.43; // positive impact for Male
} else {
    genderImpact = -2.35; // negative impact for Female
}

// ...

let linearCombination = (
    // ... (previous coefficients)
    //  + genderImpact
    coefficients.GenderImpact * genderImpact +
    // ... (other parameters)
);

// ...
