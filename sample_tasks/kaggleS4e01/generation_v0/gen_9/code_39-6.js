/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Considering the impact of gender on the prediction, we can add a step in the computation using the 'Gender' parameter. 
// For example, we can add a factor based on whether the customer is female or male. 

// Let's add a step in the computation using the 'Gender' parameter
let genderImpactFactor = Gender === 'Female' ? 0.05 : -0.03;
// Adjust the churn probability based on the impact of gender
churnProbability += genderImpactFactor;

return churnProbability;
