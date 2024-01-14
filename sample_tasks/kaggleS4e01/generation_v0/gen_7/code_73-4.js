/** // 0.6412250763898487 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let linearCombination = -2.31; // Intercept

    linearCombination += (0.00 * CustomerId) + (0.00 * CreditScore) +
        (-0.01 * Age) + (-0.05 * Tenure) + (0.00 * Balance) +
        (-0.73 * NumOfProducts) + (-0.35 * HasCrCard) +
        (-1.73 * IsActiveMember) + (0.00 * EstimatedSalary);

    // Geography impact
    if (Geography === 'Germany') {
        linearCombination += 0.46;
    } else if (Geography === 'Spain') {
        linearCombination += (-0.21);
    } else {
        linearCombination += (-2.22);
    }

    // Gender impact
    if (Gender === 'Male') {
        linearCombination += (-0.21);
    }

    // Surname impact
    if (Surname.length <= 5) {
        linearCombination += (-2.31);
    } else {
        linearCombination += 1.37;
    }

    // Additional impacts
    linearCombination += ((Age * Tenure + (HasCrCard === 1 ? 1000 : 407.13)) / (NumOfProducts + Balance)) * 0.02;
    linearCombination += Math.abs(CreditScore - 22.76) / 397.43 * (-0.45);

    // Calculate probability
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
