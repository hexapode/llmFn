/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous function code)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.70; // Assigning a positive impact for male customers
    } else {
        genderImpact = -0.50; // Assigning a negative impact for female customers
    }

    // ... (previous function code)

    let linearCombination = (
        // ... (previous linear combination calculations)
        coefficients.GenderImpact * genderImpact + // Incorporating the impact of the Gender parameter
        // ... (remaining linear combination calculations)
    );

    // ... (remaining function code)
}
