/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = -0.35;
    } else {
        genderImpact = 0.29;
    }

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        + coefficients.GenderImpact * genderImpact
        // ... (rest of the code remains the same)
    );

    // ... (rest of the code remains the same)
}
