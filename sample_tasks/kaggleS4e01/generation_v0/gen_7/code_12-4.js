/** // 0.77615902879972 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination =
        0.07 * Age -
        0.04 * Tenure -
        0.51 * NumOfProducts -
        0.16 * HasCrCard -
        0.82 * IsActiveMember +
        (Geography === 'Germany' ? 0.50 : -0.50) +
        (Gender === 'Male' ? -0.15 : 0.15) +
        (Surname.length <= 5 ? -0.09 : 1.27) +
        ((Age * Tenure) / (NumOfProducts + Balance)) * 0.02 +
        Math.abs(CreditScore - 60.10) / 101.11 * -0.06;

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
