/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculating a simplified linear combination
    const linearCombination = 0.5 * CreditScore - 0.2 * Age + 0.1 * Balance - 0.3 * NumOfProducts - 0.2 * HasCrCard - 0.5 * IsActiveMember + 0.4 * EstimatedSalary;
  
    // Applying the logistic function to get the probability
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
