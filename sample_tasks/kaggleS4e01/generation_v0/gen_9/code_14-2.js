/** // 0.7608041410658262 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = Balance > 80000 ? -0.15 : -0.3;
  let creditScoreFactor = 1.5 * (0.92 - CreditScore / 9359);
  let ageFactor = 2 * (Age / 100);
  let isActiveMemberFactor = IsActiveMember ? -0.2 : 0;
  let geographyFactor = Geography === 'Germany' ? 0.1 : 0;
  
  let churnProbability = 0.5 + tenureFactor + balanceFactor + creditScoreFactor + ageFactor + isActiveMemberFactor + geographyFactor;

  return churnProbability;
}
