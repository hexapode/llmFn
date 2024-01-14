/** // 0.5164283272620609 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let linearCombination = (
        0.02 * Age - 0.04 * Tenure - 0.52 * NumOfProducts - 0.16 * HasCrCard - 0.81 * IsActiveMember +
        (Geography === 'Germany' ? 0.49 : (Geography === 'Spain' ? 0.12 : 0.05)) +
        (Gender === 'Male' ? -0.15 : 0) +
        (Surname.length <= 5 ? -0.09 : 1.28) +
        ((Age * Tenure) / (NumOfProducts + Balance)) + 0.00 * (CustomerId % 10) +
        0.02 * (Age * 0.03) / (EstimatedSalary * 0.01) + 0.04  // Add more coefficients as needed
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
