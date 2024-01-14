/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.23;
    } else {
        genderImpact = -0.98;
    }

    // ... (continue with the rest of the computation)

    let linearCombination = (
        // ... (previous linear combination code)
        + coefficients.GenderImpact * genderImpact
        // ... (rest of the linear combination code)
    );

    // ... (rest of the code remains unchanged)
}
