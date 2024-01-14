/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.50;
    } else {
        genderImpact = -0.50;
    }

    // ... (inside linearCombination)
    coefficients.GenderImpact * genderImpact +
    // ...
