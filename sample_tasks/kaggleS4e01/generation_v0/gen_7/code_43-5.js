/** // 0.8138824219831717 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let linearCombination = (
        -0.05 * Tenure +
        -0.60 * NumOfProducts +
        -0.27 * HasCrCard +
        -1.80 * IsActiveMember + 
        0.43 * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : -1)) +
        -0.21 * (Gender === 'Male' ? 1 : -1) +
        0.04 * (Surname.length <= 5 ? -1 : 1) +
        0.02 * ((Age * Tenure + (HasCrCard === 1 ? 1000 : 202.46)) / (NumOfProducts + Balance)) +
        0.01 * (CustomerId % 10) +
        -0.45 * (Math.abs(CreditScore - 1197.78) / 799.82 + NumOfProducts * 1.03) +
        -0.42 * (Age * 1.03 / (EstimatedSalary * 0.07)) +
        0.24 + (Age * Balance * 0.00) * (IsActiveMember === 1 ? 2 : 1) +
        0.10 * 0.50 +
        0.76 * (Age * 0.21)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
