/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Gender=Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // (existing code...)

    let linearCombination = (
        // ... (existing code)
        coefficients.GenderImpact * (Gender === 'Male' ? 2.33 : -2.34) +
        // ... (existing code)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
