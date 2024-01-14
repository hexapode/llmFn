/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Gender=Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...

    let genderImpact = (Gender === 'Male') ? 1.25 : -0.85;

    // ...
    
    let linearCombination = (
        // ... (previous calculations)
        + coefficients.GenderImpact * genderImpact
        // ... (remaining calculations)
    );

    // ...
