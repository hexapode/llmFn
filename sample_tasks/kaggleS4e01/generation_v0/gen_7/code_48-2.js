/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.33;
    } else {
        genderImpact = -2.34;
    }

    // add genderImpact to the linear combination
    let linearCombination = (
        // ... other coefficients
        + coefficients.GenderImpact * genderImpact
        // ... other terms
    );

    // ...
