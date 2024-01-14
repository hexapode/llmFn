/** // 0.8083770797012584 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Apply coefficients to each input
    const linearCombination = (
        -0.01 * CreditScore +
        0.97 * Age -
        0.13 * Tenure -
        7.16 * NumOfProducts -
        2.00 * HasCrCard -
        10.53 * IsActiveMember +
        2.89 * (Geography === 'Germany' ? 1 : 0) -
        1.52 * (Gender === 'Male' ? 1 : 0) +
        0.15 * (Surname.length <= 5 ? -1 : 1)
    );

    // Calculate probability of churn
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
