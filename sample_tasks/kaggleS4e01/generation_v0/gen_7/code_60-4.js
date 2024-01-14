/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.50;
    } else {
        genderImpact = -0.20;
    }

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous components remain unchanged)
        coefficients.GenderImpact * genderImpact +
        // ... (other components remain unchanged)
    );

    // ... (previous code remains unchanged)

    return probability;
}
