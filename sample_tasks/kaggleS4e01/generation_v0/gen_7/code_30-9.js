/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let genderImpact = (Gender === 'Male' ? 1.20 : -0.85);

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.GenderImpact * genderImpact + // New step considering the Gender parameter
        // ... (previous code remains the same)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
