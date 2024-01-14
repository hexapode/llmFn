/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.15;
    } else {
        genderImpact = -0.87;
    }

    // ... (continue with the rest of the computation as before)

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.GenderImpact * genderImpact +
        // ... (rest of the computation)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
