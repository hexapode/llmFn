/** // 0.5480232571588128 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnProbability = 1 / (1 + Math.exp(-(0.05 * CreditScore + 0.02 * Age - 0.08 * Tenure + 0.0001 * Balance - 0.1 * NumOfProducts - 0.02 * HasCrCard - 0.05 * IsActiveMember + 0.00002 * EstimatedSalary)));
    return churnProbability;
}
