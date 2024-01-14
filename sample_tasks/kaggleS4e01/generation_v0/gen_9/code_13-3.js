/** // 0.4272896493517231 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6);
  let balanceFactor = -0.0003 * Balance + (NumOfProducts === 1 ? 0.03 : -0.09);
  let creditScoreFactor = -1.5 * (CreditScore / 10000);
  let ageFactor = 0.02 * Age;
  let numOfProductFactor = -0.1 * NumOfProducts;
  let isActiveMemberFactor = IsActiveMember ? -0.2 : 0.1;
  let estimatedSalaryFactor = 0.0001 * EstimatedSalary;

  let churnProbability = 0.2 + tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor;
  
  return churnProbability;
}
