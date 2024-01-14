/** // 0.6515406533030763 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Simplified factors
  let balanceFactor = Balance / 100000;
  let creditScoreFactor = CreditScore / 1000;
  let ageFactor = Age / 100;
  
  // Combine factors to calculate churn probability
  let churnProbability = balanceFactor - creditScoreFactor + ageFactor;
  
  return churnProbability;
}
