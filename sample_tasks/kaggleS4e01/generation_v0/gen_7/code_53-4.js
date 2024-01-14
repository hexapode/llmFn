/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 0.84; // Assuming that being male increases the likelihood of churning
    } else {
        genderImpact = -0.62; // Assuming that being female decreases the likelihood of churning
    }

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.GenderImpact * genderImpact +
        // ... (previous code remains unchanged)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
