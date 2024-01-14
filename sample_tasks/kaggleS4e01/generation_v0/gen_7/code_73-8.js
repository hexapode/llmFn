/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

    // ... (Previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = -1.25;
    } else {
        genderImpact = 1.10;
    }

    // ... (Add genderImpact to the linearCombination calculation)
    
    let linearCombination = (
        // ... (Previous linearCombination components)
        coefficients.GenderImpact * genderImpact +
        // ... (Remaining components)
    );

    // ... (Remaining code remains unchanged)
