/** // 0.7970455701101442 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = -0.06 * (Balance / 133106.78) - 0.17;
  let creditScoreFactor = 2.09 * (1.93 - CreditScore / 9360.24);
  let ageFactor = 3.08 * (Age / 103.73);
  let numOfProductFactor = -2.99 * (NumOfProducts / 11.14);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.09 : -0.10);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179993.84);
  
  let churnProbability = 0.2 + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor;

  return churnProbability;
}
