/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// The parameter Gender can impact the prediction by influencing the customer's behavior, preferences, and potentially their likelihood to churn. 
// We will add a step in the computation using the parameter Gender to account for these potential impacts.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
    // ... (existing code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = -0.50;
    } else {
        genderImpact = 0.50;
    }

    // ... (existing code remains the same)

    let linearCombination = (
        // ... (existing code remains the same)
        + coefficients.GenderImpact * genderImpact
        // ... (existing code remains the same)
    );

    // ... (existing code remains the same)

}
