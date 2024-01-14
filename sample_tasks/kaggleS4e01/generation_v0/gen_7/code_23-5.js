/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous linearCombination calculation remains the same)
        // Add the impact of the "Gender" parameter
        coefficients.GenderImpact * (Gender === 'Male' ? 2.06 : -1.07) +
        // ... (other parameter impacts remain the same)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
