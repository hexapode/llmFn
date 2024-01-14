/** // 0.7939243691767829 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination =
        0.05 * Age +
        0.07 * Tenure -
        0.52 * NumOfProducts -
        0.16 * HasCrCard -
        0.81 * IsActiveMember +
        0.49 * (Geography === 'Germany' ? 1 : 0) +
        (-0.15 * (Gender === 'Male' ? 1 : 0)) +
        0.05 * (Surname.length <= 5 ? -0.09 : 1.28) +
        0.02 * ((Age * Tenure) / (NumOfProducts + Balance)) +
        (-1.01 * ((Age * 0.03) / (EstimatedSalary * 0.01))) +
        0.06 * (Math.abs(CreditScore - -59.10) / 113.53) +
        1.00; // intercept term

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
