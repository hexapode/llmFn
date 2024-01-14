/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Existing coefficients and calculations...

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.21;
    } else {
        genderImpact = -1.12;
    }

    // Continue with existing calculations...

    let linearCombination = (
        // Existing linear combination terms...
        + coefficients.GenderImpact * genderImpact
        // Other terms remain unchanged
    );

    // Remaining calculations and return statement...
}
