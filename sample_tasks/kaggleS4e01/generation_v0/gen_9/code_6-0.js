/** // 0.7132674387283375 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.25 * (CreditScore / 850) + 0.35 * (Age / 100) + 0.15 * (Balance / 250000) + 0.10 * (IsActiveMember ? 0 : 1) - 0.05 * (Tenure / 20) - 0.15 * (NumOfProducts / 4) - 0.05 * (HasCrCard ? 0 : 1) + 0.05 * (EstimatedSalary / 500000) + (Geography === 'France' ? -0.05 : 0.05) + (Gender === 'Female' ? 0.05 : -0.05);
  return churnProbability;
}
