/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Gender=Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous coefficients and calculations)
    
    let linearCombination = (
        // ... (previous calculation)
        coefficients.GenderImpact * (Gender === 'Male' ? 1.00 : -1.00) +
        // ... (remaining calculation)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
