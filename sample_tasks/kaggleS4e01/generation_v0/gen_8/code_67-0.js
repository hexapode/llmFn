/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... (previous code remains the same)

const genderImpact = (Gender === 'Male') ? 0.10 : -0.05;

// Add gender impact to the weighted sum
weightedSum += genderImpact;

// ... (remaining code remains the same)
