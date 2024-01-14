/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Gender could impact the prediction based on historical data showing different churn rates for different genders. 
// We can add a step in the computation to include the impact of the Gender parameter on the prediction.

let genderImpact = 0.00;
if (Gender === 'Male') {
    genderImpact = 0.58;
} else {
    genderImpact = -0.67;
}

// Include the genderImpact in the linear combination
linearCombination += coefficients.GenderImpact * genderImpact;
