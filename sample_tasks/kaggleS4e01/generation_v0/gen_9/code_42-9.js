/** // 0.7770933865601838 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.2 * (Age / 100) + 0.1 * (Balance / 100000) - 0.15 * (NumOfProducts / 10) - 0.2 * IsActiveMember + 0.05 * (EstimatedSalary / 200000) - 0.05 * (CreditScore / 1000);
  
  if (Geography === 'Germany') {
    churnProbability += 0.1;
  }
  if (HasCrCard) {
    churnProbability += 0.05;
  }
  if (Gender === 'Female') {
    churnProbability += 0.1;
  }
  
  if (Tenure > 5 && NumOfProducts > 2) {
    churnProbability += 0.1;
  }
  if (Age > 40 && EstimatedSalary > 60000) {
    churnProbability += 0.1;
  }

  return churnProbability;
}
