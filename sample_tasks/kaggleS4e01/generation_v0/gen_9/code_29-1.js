/** // 0.6234270897594465 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = (Balance > 80000) ? 0.2 : -0.15;
  let creditScoreFactor = CreditScore / 10000 - 0.5;
  let ageFactor = Age / 100 - 0.3;
  let numOfProductFactor = (NumOfProducts === 1) ? -0.1 : 0.1;
  let isActiveMemberFactor = IsActiveMember ? 0.1 : -0.1;
  let estimatedSalaryFactor = EstimatedSalary / 200000 - 0.3;

  let churnProbability = 0.2 + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor;

  return churnProbability;
}
