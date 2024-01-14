/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Gender=Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ...
    let genderImpact = (Gender === 'Male' ? -0.34 : 0.23); // Assign an impact value based on the gender
    // ...

    let linearCombination = (
        // ... (other coefficients multiplied by their respective parameters)
        + coefficients.GenderImpact * genderImpact
        // ... (continue with other coefficients and parameters)
    );
    // ...
