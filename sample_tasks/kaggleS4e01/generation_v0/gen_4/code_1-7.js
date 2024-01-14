/** // -Infinity //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  probability = (CreditScore * 0.1) + (Age * 0.2) - (Balance * 0.15) - (NumOfProducts * 0.05) - (IsActiveMember ? 0.1 : 0.05) + (EstimatedSalary * 0.08);
  
  return probability;
}
