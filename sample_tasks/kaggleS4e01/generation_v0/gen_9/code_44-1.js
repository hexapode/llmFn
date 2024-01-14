/** // 0.6334527531800211 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.5; // Default churn probability

  // Adjust churn probability based on different input factors
  churnProbability += (Age / 100) - (CreditScore / 1000); // Adjust based on Age and CreditScore
  churnProbability -= (NumOfProducts / 10) + (HasCrCard ? 0 : 0.1); // Adjust based on NumOfProducts and HasCrCard
  churnProbability += (IsActiveMember ? 0 : 0.1) + (Geography === 'Germany' ? 0.1 : 0); // Adjust based on IsActiveMember and Geography
  churnProbability += (Balance / 100000) - (Tenure / 10); // Adjust based on Balance and Tenure

  // Return the computed churn probability
  return churnProbability;
}
