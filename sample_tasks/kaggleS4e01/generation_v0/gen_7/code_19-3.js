/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...
    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.15;
    } else {
        genderImpact = -0.05;
    }
    // ...
    let linearCombination = (
        // ... (previous code remains unchanged)
        + coefficients.GenderImpact * genderImpact
        // ... (continue with the rest of the linear combination calculation)
    );
    // ...
