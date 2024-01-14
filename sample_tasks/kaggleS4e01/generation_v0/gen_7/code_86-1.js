/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Gender=Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    let genderImpact = (Gender === 'Male' ? 0.54 : -0.32);

    // ... (other calculations)

    let linearCombination = (
        // ... (previous code)
        coefficients.GenderImpact * genderImpact
        // ... (other calculations)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
