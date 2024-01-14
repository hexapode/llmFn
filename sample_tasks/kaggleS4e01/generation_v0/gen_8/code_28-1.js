/** // 0.8002781953598412 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let weightedSum = (CreditScore * 0.00) +
        (Age * 0.06) +
        ((Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.59 : -0.19) +
        ((Gender === 'Female') ? 0.42 : -0.10) +
        (Tenure * -0.01) +
        (IsActiveMember * -0.91) +
        (NumOfProducts * -1.51) -
        (HasCrCard * 0.15) +
        (EstimatedSalary * 0.00) - 
        (CustomerId * 0.00);
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
