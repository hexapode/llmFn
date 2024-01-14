/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Considering the impact of the Gender parameter on the prediction, we can update the computation by adding a step involving the Gender parameter.

// ...

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.50;
} else {
    genderImpact = -0.80;
}

// Then include the genderImpact to the linearCombination calculation
linearCombination += coefficients.GenderImpact * genderImpact;

// ...
