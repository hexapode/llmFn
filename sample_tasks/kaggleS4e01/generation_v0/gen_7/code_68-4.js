/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

let genderImpact;
if (Gender === 'Male') {
    genderImpact = 0.27;  // Add positive impact for Male gender
} else {
    genderImpact = -0.15; // Add negative impact for Female gender
}



coefficients.GenderImpact * genderImpact
