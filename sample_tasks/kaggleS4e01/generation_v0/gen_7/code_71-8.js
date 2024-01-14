/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = (
        (CustomerId * 0.01) +
        (CreditScore * 0.05) +
        (Age * -0.1) +
        (Tenure * -0.05) +
        (Balance * 0.02) +
        (NumOfProducts * -0.2) +
        (HasCrCard * -0.1) +
        (IsActiveMember * -0.3) +
        (EstimatedSalary * 0.001) +
        (Geography === 'Germany' ? 0.2 : Geography === 'Spain' ? -0.15 : -0.1) +
        (Gender === 'Male' ? 0.1 : -0.05)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
