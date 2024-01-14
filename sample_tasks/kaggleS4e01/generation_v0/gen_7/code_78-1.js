/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// We can incorporate the impact of the Gender parameter by assigning different coefficients based on the gender.
// For example, we can use a higher coefficient for 'Female' and a lower coefficient for 'Male' to indicate that female customers are more likely to churn.

// Adding a step in the computation using the Gender parameter
let genderImpact = 0.00;
if (Gender === 'Female') {
    genderImpact = 1.50;
} else {
    genderImpact = -0.80;
}

// Then, include the genderImpact in the linear combination
let linearCombination = (
    // ... (other parameters)
    coefficients.GenderImpact * genderImpact +
    // ... (other parameters)
);
