/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// The gender parameter can impact the prediction because certain studies and analyses have shown that gender can be a factor in customer churn. 
// For example, in some cases, males and females may have different behaviors or preferences when it comes to using a particular service or product, 
// and these behaviors can influence the likelihood of churning.

// To incorporate the Gender parameter into the computation, we can assign different impact coefficients based on the gender. 
// For example, if the Gender is 'Male', the impact coefficient could be 2.06, and if the Gender is 'Female', the impact coefficient could be -1.07.

// Then we can multiply the corresponding coefficient with the Gender parameter and add it to the linear combination.

// Updated function with gender impact included:

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code)

    let linearCombination = (
        // ... (existing code)
        + coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07)
        // ... (existing code)
    );
    
    // ... (existing code)

    return probability;
}
