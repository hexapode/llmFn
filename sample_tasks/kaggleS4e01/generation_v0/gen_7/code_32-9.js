/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ...

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 1.11;  // Positive impact for male
} else {
    genderImpact = -1.11;  // Negative impact for female
}

// ...

let linearCombination = (
    // ... (previous calculations remain the same)
    coefficients.GenderImpact * genderImpact  // Adding impact of Gender
    // ...
);

// ...
