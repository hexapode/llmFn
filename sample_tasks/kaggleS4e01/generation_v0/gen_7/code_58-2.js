/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

let genderImpact = (Gender === 'Male' ? 1.5 : -1.5);
// Adding gender impact to the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;
