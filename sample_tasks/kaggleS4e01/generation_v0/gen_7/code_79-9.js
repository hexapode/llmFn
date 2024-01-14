/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 1.50;  // positive impact for males
    } else {
        genderImpact = -0.80;  // negative impact for females
    }

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (other coefficients multiplied by their respective variables)
        + coefficients.GenderImpact * genderImpact
        // ... (rest of the coefficients and variables)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
