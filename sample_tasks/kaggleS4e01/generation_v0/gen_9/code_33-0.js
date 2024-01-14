/** // 0.6082776389856399 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let tenureFactor = -0.15 * (Tenure / 2.91) - (Age / 99.16);
  let balanceFactor = -0.06 * (Balance / 121005.17) + (NumOfProducts === 1 ? 0.04 : -0.17);
  let creditScoreFactor = 2.08 * (1.93 - CreditScore / 9359.34); 
  let numOfProductFactor = -2.98 * (NumOfProducts / 12.15) + (HasCrCard ? 0.09 : 0); 
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.08 : -0.10);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.83);
  let genderFactor = Gender === 'Female' ? 0.09 : -0.05;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor;

  return churnProbability;
}
