/** // 0.5899851366891248 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = (-0.5 * CreditScore/1000) + (0.2 * Age/100) - (0.1 * Balance/100000) - (0.1 * Tenure/10) - (0.1 * NumOfProducts) - (0.1 * (HasCrCard ? 1 : 0)) + (0.1 * (IsActiveMember ? 1 : 0)) + (0.1 * EstimatedSalary/100000);
  
  return churnProbability;
}
