/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.72;  // assigned positive impact for male
    } else if (Gender === 'Female') {
        genderImpact = -0.64;  // assigned negative impact for female
    } else {
        genderImpact = 0.00;  // neutral impact if gender is not specified
    }

    // ... (further calculations)

    let linearCombination = (
        // ... (previous code)
        coefficients.GenderImpact * genderImpact +
        // ... (remaining code)
    );

// ... (remaining code)
