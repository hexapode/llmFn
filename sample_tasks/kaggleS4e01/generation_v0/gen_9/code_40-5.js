/** // 0.46771689879663264 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = -0.0005 * Balance;
  let creditScoreFactor = -0.002 * CreditScore;
  let ageFactor = 0.01 * Age;
  let numOfProductFactor = -0.1 * NumOfProducts;
  let isActiveMemberFactor = IsActiveMember ? 0.1 : -0.1;
  let geographyFactor = Geography === 'Germany' ? 0.1 : 0;
  
  let churnProbability = 0.5 + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + geographyFactor;
  
  return churnProbability;
}
