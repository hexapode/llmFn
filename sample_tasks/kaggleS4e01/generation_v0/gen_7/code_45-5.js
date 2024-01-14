/** // 0.7065663303063427 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination =
        -0.01 * Age +
        -0.05 * Tenure +
        -0.60 * NumOfProducts +
        -0.36 * HasCrCard +
        -1.70 * IsActiveMember +
        0.46 * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : 0)) +
        -0.21 * (Gender === 'Male' ? 1 : -1) +
        0.04 * (Surname.length <= 5 ? -1 : 1) +
        0.02 * ((Age * Tenure + (HasCrCard === 1 ? 1000 : 407)) / (NumOfProducts + Balance)) +
        -0.47 * (Age * 1.04) / (EstimatedSalary * 0.07);

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
