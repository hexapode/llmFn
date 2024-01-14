/** // 0.578654101163561 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance > 80000 ? 0.4 : -0.4;
  let creditScoreFactor = CreditScore/10000 - 0.5;
  let ageFactor = Age/100 - 0.2;
  let numOfProductFactor = NumOfProducts > 2 ? -0.2 : 0;
  let isActiveMemberFactor = IsActiveMember ? 0.1 : -0.1;
  let estimatedSalaryFactor = EstimatedSalary/100000 - 0.5;
  let tenureFactor = Tenure/10 - 1;
  
  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + tenureFactor;
  
  return churnProbability;
}
