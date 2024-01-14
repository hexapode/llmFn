/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// Based on the values of the Gender parameter, we can assume that the gender impact could be positive for 'Male' and negative for 'Female'.
// We will add a step in the computation to include the impact of the Gender parameter.

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Female') {
        genderImpact = -1.50;
    } else if (Gender === 'Male') {
        genderImpact = 1.80;
    }

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.GenderImpact * genderImpact +
        // ... (previous code remains unchanged)
    );

    // ... (previous code remains unchanged)

    return probability;
}
