/** // 0.6420695069650552 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = (
        -0.05 * Tenure - 0.74 * NumOfProducts - 0.36 * HasCrCard - 1.75 * IsActiveMember +
        0.46 * (Geography === 'Germany' ? 1 : (Geography === 'Spain' ? -1 : -2)) +
        0.04 * (Surname.length <= 5 ? -2.39 : 1.63) +
        0.02 * ((Age * Tenure + (HasCrCard === 1 ? 1000 : 426.44)) / (NumOfProducts + Balance)) +
        0.01 * (CustomerId % 10.05) +
        0.77 * (Math.abs(CreditScore + 4.97) / 396.32) +
        (-0.48 * (Age * 1.08) / (EstimatedSalary * 0.07)) +
        0.21 * 109.01 / 396.32 +
        (Gender === 'Male' ? -0.21 : 0.21)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
