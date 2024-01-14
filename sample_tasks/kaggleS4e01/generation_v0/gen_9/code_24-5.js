/** // 0.5862408022060559 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance <= 80000 ? -0.15 : -0.05;
  let creditScoreFactor = CreditScore <= 600 ? -0.15 : 0.10;
  let ageFactor = Age > 40 ? 0.05 : -0.05;
  let numOfProductFactor = NumOfProducts > 2 ? -0.10 : 0.05;
  let isActiveMemberFactor = IsActiveMember === 1 ? -0.05 : 0.10;
  
  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor;
  
  return churnProbability;
}
