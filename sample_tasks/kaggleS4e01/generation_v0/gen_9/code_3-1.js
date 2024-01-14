/** // 0.4177749908889735 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let score = (CreditScore * 0.2) + (Age * 0.3) - (Balance * 0.1) - (Tenure * 0.05) - (NumOfProducts * 0.15) - (HasCrCard ? 0 : 0.05) + (IsActiveMember ? 0 : 0.1) + (EstimatedSalary * 0.02);
  let churnProbability = 1 / (1 + Math.exp(-score));

  return churnProbability;
}
