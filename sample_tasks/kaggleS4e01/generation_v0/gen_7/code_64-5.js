/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code)

let genderImpact = (Gender === 'Male') ? 1.50 : -1.20;

// ... (inside the linearCombination calculation)

coefficients.GenderImpact * genderImpact

// ... (rest of the code)
