/** // 0.5879270190218995 //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        GenderImpact: -0.45, // Coefficient for the impact of Gender on churn prediction
        // ... (other coefficients remain the same)
    };

    // ... (other variable calculations remain the same)

    let linearCombination = (
        // ... (other linear combination terms remain the same)
        coefficients.GenderImpact * (Gender === 'Male' ? 0.85 : -1.23) // Impact of Gender on churn prediction
        // ... (other terms remain the same)
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
