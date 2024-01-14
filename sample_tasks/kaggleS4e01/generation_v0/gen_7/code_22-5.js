/** // 0.4982244327345527 //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    // ... (same as before)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.86;
    } else {
        genderImpact = -0.42;
    }

    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        + coefficients.GenderImpact * genderImpact
        // ... (same as before)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
