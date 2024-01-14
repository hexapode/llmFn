/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code...

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.68;
    } else {
        genderImpact = -2.47;
    }

    // Existing code...

    let linearCombination = (
        // ... (previous calculations)
        coefficients.GenderImpact * genderImpact +  // Include Gender impact in the linear combination
        // ... (remaining calculations)
    );

    // ... (remaining code)

    return probability;
}
