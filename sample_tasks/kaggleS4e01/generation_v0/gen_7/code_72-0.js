/** // 0.4852820415836043 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate linear combination of input parameters with coefficients
    const linearCombination = 0.03 * CreditScore - 0.04 * Age - 0.05 * Tenure - 0.02 * NumOfProducts - 0.01 * Balance
        - 0.01 * HasCrCard - 0.03 * IsActiveMember + 0.02 * EstimatedSalary + (Geography === 'Germany' ? 0.12 : 0)
        + (Gender === 'Male' ? -0.08 : 0.06);

    // Calculate probability using sigmoid function
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
