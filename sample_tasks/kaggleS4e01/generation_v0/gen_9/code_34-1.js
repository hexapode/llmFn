/** // 0.38641039937532246 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = Balance / 100000;
  let creditScoreFactor = CreditScore / 10000;
  let ageFactor = Age / 100;
  let numOfProductFactor = NumOfProducts / 10;
  let isActiveMemberFactor = IsActiveMember === 1 ? 0.1 : 0;
  let geographyFactor = Geography === 'Germany' ? 0.1 : 0;
  let churnProbability = 0.2 - balanceFactor + creditScoreFactor - ageFactor - numOfProductFactor + isActiveMemberFactor + geographyFactor;
  
  return churnProbability;
}
