/** // 0.6532677379090115 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let baseScore = 0.5;
  let creditScoreFactor = 0.3 * (1 - CreditScore / 1000); 
  let ageFactor = 0.2 * (Age / 100); 
  let balanceFactor = 0.1 * (Balance / 100000); 
  let activeMemberFactor = IsActiveMember ? -0.1 : 0.1; 
  let churnProbability = baseScore + creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor;
  
  return churnProbability;
}
