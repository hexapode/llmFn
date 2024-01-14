/** // 0.5297869120345513 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = (Balance > 80000 ? 0.1 : 0) - 0.05 * (Balance / 121005);
  let creditScoreFactor = 0.002 * (820 - CreditScore);
  let ageFactor = 0.03 * Age;
  let numOfProductFactor = (NumOfProducts === 1 ? 0.05 : -0.15);
  let isActiveMemberFactor = (IsActiveMember ? 0.1 : 0);
  let estimatedSalaryFactor = 0.0001 * EstimatedSalary;
  let geographyFactor = (Geography === 'Germany' ? 0.1 : 0);
  let genderFactor = (Gender === 'Female' ? 0.05 : 0);
  
  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor;

  return churnProbability;
}
