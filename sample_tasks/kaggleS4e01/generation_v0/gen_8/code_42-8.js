/** // 0.6634604125750047 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = (CreditScore * 0.01) +
        (Age * 0.05) +
        ((Geography === 'Germany' ? 1 : 0) * 0.5) + 
        ((Gender === 'Female' ? 1 : 0) * 0.4) +
        (Tenure * 0.02) +
        (IsActiveMember * (-0.8)) +
        (NumOfProducts * (-1.5)) +
        (Balance / (Age + 1) * 0.03) +
        ((NumOfProducts < 3 ? -4 : 2));

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
