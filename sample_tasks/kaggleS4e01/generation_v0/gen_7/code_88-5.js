/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    let genderImpact = (Gender === 'Male' ? 0.67 : -0.84);

    // ... (previous code)

    let linearCombination = (
        // ... (previous linearCombination calculation) +
        coefficients.GenderImpact * genderImpact +
        // ... (other coefficients and parameter impacts)
    );

    // ... (probability calculation and return)
}
