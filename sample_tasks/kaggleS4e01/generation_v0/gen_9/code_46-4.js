/** // 0.55931834139796 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Age factor
  let ageFactor = (Age / 100) - (CreditScore / 5000) + (IsActiveMember ? -0.1 : 0) + (EstimatedSalary > 60000 ? 0.05 : 0.1);

  // Balance factor
  let balanceFactor = (Balance / 150000) - (NumOfProducts === 2 ? 0.05 : 0.15);

  // Tenure factor
  let tenureFactor = (Tenure / 4) - (Age / 150) - (EstimatedSalary > 100000 ? 0.1 : 0.15);

  // Geography factor
  let geographyFactor = (Geography === 'Germany' ? 0.1 : 0) + (Geography === 'Spain' ? -0.1 : 0);

  // Credit score factor
  let creditScoreFactor = 0.2 * (1 - CreditScore / 1000);

  // Num of products factor
  let numOfProductFactor = -0.1 * (NumOfProducts - 4) + (HasCrCard ? 0.05 : 0);

  // Churn probability calculation
  let churnProbability = ageFactor + balanceFactor + tenureFactor + geographyFactor + creditScoreFactor + numOfProductFactor;

  return churnProbability;
}
