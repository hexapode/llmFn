/** // 0.5633443808220129 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;
  let creditScoreFactor = (850 - CreditScore) / 850;
  let balanceFactor = Balance / 10000;
  
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor) / 3;
  
  return churnProbability;
}
