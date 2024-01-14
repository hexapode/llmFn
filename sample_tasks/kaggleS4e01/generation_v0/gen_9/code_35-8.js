/** // 0.7611070268740877 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let ageFactor = 0.1 * Age;
  let creditScoreFactor = 0.5 * (1 - CreditScore / 1000);
  let balanceFactor = (Balance > 80000) ? 0.2 : 0;
  let geographyFactor = (Geography === 'Germany') ? 0.1 : 0;
  let isActiveMemberFactor = IsActiveMember ? 0.15 : 0;
  
  let churnProbability = 0.2 + ageFactor + creditScoreFactor + balanceFactor + geographyFactor + isActiveMemberFactor;

  return churnProbability;
}
