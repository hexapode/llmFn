/** // 0.6919446204984794 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // We can simplify the logic by using basic mathematical operations and simple thresholds
  
  // Calculate the churn probability based on the input parameters
  let churnProbability = 0.5; // Default to 0.5

  if (Age > 60) {
    churnProbability += 0.3; // Older customers are more likely to churn
  }
  if (Balance > 80000) {
    churnProbability += 0.1; // Customers with high balances are more likely to churn
  }
  if (NumOfProducts > 1) {
    churnProbability -= 0.1; // Customers with multiple products are less likely to churn
  }
  if (IsActiveMember === 0) {
    churnProbability += 0.2; // Inactive members are more likely to churn
  }
  if (Geography === 'Germany') {
    churnProbability += 0.1; // Customers from Germany are more likely to churn
  }

  return churnProbability;
}
