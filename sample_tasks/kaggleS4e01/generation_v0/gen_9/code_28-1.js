/** // 0.42822254948191346 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  const balanceFactor = -0.00025 * Balance;
  const creditScoreFactor = -0.00025 * CreditScore;
  const ageFactor = 0.015 * Age;
  const numOfProductFactor = -0.05 * NumOfProducts;
  const isActiveMemberFactor = IsActiveMember ? 0.1 : 0;
  const estimatedSalaryFactor = 0.00005 * EstimatedSalary;
  const geographyFactor = Geography === 'Germany' ? 0.05 : 0;
  const genderFactor = Gender === 'Female' ? 0.05 : 0;
  
  const churnProbability = 0.5 + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor;

  return churnProbability;
}
