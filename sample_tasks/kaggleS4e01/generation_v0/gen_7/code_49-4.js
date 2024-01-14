/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.20;
    } else {
        genderImpact = -0.80;
    }

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous linear combination)
        coefficients.GenderImpact * genderImpact +
        // ... (continue with other parameters and coefficients)
    );

    // ... (rest of the code remains unchanged)

}
