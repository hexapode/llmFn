/** // 0.5950879665624494 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = (Balance - 50000) / 50000;
  let creditScoreFactor = (850 - CreditScore) / 850;
  let ageFactor = Age / 100;

  let numOfProductFactor = NumOfProducts / 10;
  let isActiveMemberFactor = IsActiveMember ? -0.1 : 0.1;
  let estimatedSalaryFactor = (EstimatedSalary - 50000) / 50000;
  
  let genderFactor = Gender === 'Female' ? 0.1 : -0.05; 
  let geographyFactor = Geography === 'France' ? -0.05 : 0.00; 
  
  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
