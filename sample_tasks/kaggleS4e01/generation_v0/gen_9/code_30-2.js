/** // 0.6229264796887589 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = 0.03 * Age;
  let tenureFactor = -0.15 * Tenure;
  let balanceFactor = 0.05 * Balance;
  let creditScoreFactor = 0.002 * CreditScore;
  let numOfProductFactor = -0.2 * NumOfProducts;
  let isActiveMemberFactor = IsActiveMember ? 0.1 : 0;
  let geographyFactor = Geography === 'Germany' ? 0.1 : 0;
  
  let churnProbability = 0.5 + ageFactor + tenureFactor + balanceFactor + creditScoreFactor + numOfProductFactor + isActiveMemberFactor + geographyFactor;

  return churnProbability;
}
