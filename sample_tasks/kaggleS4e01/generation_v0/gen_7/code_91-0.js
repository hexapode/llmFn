/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.25;
    } else {
        genderImpact = -0.94;
    }

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        // Include Gender impact
        coefficients.GenderImpact * genderImpact +
        // ... (previous code remains the same)
    );

    // ... (rest of the code remains the same)
}
