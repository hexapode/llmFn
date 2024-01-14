/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

// After considering the Gender parameter impact on the prediction, let's incorporate it into the calculation:

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let genderImpact = (Gender === 'Male' ? 1.50 : -1.25);

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous linear combination calculation)
        + coefficients.GenderImpact * genderImpact
        // ... (rest of the calculation)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
