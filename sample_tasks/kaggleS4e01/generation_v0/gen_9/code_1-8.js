/** // 0.5862550965789434 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;
  let creditScoreFactor = (850 - CreditScore) / 850;
  let balanceFactor = Balance / 10000;
  let productsFactor = 1 - (NumOfProducts / 10);
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  return (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor) / 5;
}
