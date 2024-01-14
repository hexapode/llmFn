/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...
    let genderImpact = (Gender === 'Male') ? 0.15 : -0.12;

    // Add genderImpact to the linear combination
    let linearCombination = (
        // ... (previous linear combination calculation)
        + coefficients.GenderImpact * genderImpact
        // ... (other terms)
    );
    // ...
