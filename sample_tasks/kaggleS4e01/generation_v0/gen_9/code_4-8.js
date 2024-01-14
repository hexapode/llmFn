/** // 0.6159784971537705 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.3 * (CreditScore / 850) + 0.1 * (Age / 100) + 0.2 * (Balance / 250000) - 0.1 * Tenure - 0.2 * NumOfProducts - 0.1 * (HasCrCard ? 0 : 1) - 0.1 * (IsActiveMember ? 0 : 1) + (Geography === 'France' ? -0.1 : 0.1) + (Gender === 'Female' ? 0.1 : 0);
  return churnProbability;
}
