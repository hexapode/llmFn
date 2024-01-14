/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.50;
    } else {
        genderImpact = -0.80;
    }

    // ... (additional code remains unchanged)

    let linearCombination = (
        // ... (previous computations remain unchanged)
        + coefficients.GenderImpact * genderImpact
        // ... (remaining computation remains unchanged)
    );

    // ... (remaining code remains unchanged)
}
