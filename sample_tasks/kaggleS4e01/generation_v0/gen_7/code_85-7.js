/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    let genderImpact = 0.00;
    if (Gender === 'Male') {
        genderImpact = 2.44;
    } else {
        genderImpact = -2.36;
    }

    // ... (other calculations remain the same)

    let linearCombination = (
        // ... (previous linear combination calculation)
        + coefficients.GenderImpact * genderImpact
        // ... (other parameters remain the same)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
