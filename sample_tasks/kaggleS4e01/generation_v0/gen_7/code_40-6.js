/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.30;
    } else {
        genderImpact = -0.25;
    }

    // ... (previous code)

    let linearCombination = (
        // ... (previous code)
        + coefficients.GenderImpact * genderImpact
        // ... (previous code)
    );

    // ... (previous code)
}
