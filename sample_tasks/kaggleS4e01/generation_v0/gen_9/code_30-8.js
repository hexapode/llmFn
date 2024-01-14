/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// ... [Previous code]

let genderFrequency = Gender === 'Male' ? 0.85 : 0.15;
let genderFactor = 0.04 * genderFrequency;


// ... [Remaining code]
