/** // 0.7218518110236635 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15704581, Surname=P'an, CreditScore=637, Geography=Germany, Gender=Male, Age=34.0, Tenure=1, Balance=125961.74, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=158043.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let creditScoreFactor = -0.60 * (0.99 - CreditScore / 851.10) * (HasCrCard ? 0.95 : 1); 
  let ageFactor = 1.41 * (Age / 98.39) * (Tenure > 5 ? 0.85 : 1); 
  let balanceFactor = 0.08 * (Balance / 180001.96); 
  let activeMemberFactor = 0.09 * (IsActiveMember ? -0.01 : 0.99); 
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor;

  return churnProbability;
}
