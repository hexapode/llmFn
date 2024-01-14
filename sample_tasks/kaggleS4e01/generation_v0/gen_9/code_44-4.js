/** // 0.4909651637043681 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let balanceFactor = (Balance / 100000) - 0.1;
  let creditScoreFactor = (CreditScore / 1000) - 0.5;
  let ageFactor = (Age / 100) - 0.3;
  let tenureFactor = (Tenure / 10) - 1;
  let geographyFactor = Geography === 'Germany' ? 0.1 : 0;
  let numOfProductFactor = NumOfProducts - 2;
  let isActiveMemberFactor = IsActiveMember ? 0.1 : 0;
  let churnProbability = balanceFactor + creditScoreFactor + ageFactor + tenureFactor + geographyFactor + numOfProductFactor + isActiveMemberFactor;

  return churnProbability;
}
