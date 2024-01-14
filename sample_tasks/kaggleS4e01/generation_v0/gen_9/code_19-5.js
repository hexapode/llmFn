/** // 0.6198857281523452 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = 0.3 - (CreditScore / 500);
  let ageFactor = (Age / 100) - 0.5;
  let tenureFactor = Tenure > 2 ? -0.1 : 0.1;
  let balanceFactor = Balance > 80000 ? 0.2 : -0.2;
  let numOfProductFactor = NumOfProducts === 1 ? -0.1 : 0.1;
  let isActiveMemberFactor = IsActiveMember ? -0.1 : 0.1;
  let estimatedSalaryFactor = EstimatedSalary / 200000;
  
  let churnProbability = 0.5 + creditScoreFactor + ageFactor + tenureFactor + balanceFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor;
  
  return churnProbability;
}
