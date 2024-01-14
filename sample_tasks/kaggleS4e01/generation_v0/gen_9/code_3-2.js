/** // 0.6755610997976472 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.2 * (CreditScore / 850) + 0.1 * (Age / 100) + 0.15 * (Balance / 250000) - 0.05 * (Tenure / 10) - 0.1 * NumOfProducts + 0.05 * (EstimatedSalary / 200000);
  return churnProbability;
}
