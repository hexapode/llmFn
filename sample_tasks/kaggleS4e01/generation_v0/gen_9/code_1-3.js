/** // 0.5606545264389869 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15802560, Surname=Nwokezuike, CreditScore=652, Geography=Germany, Gender=Male, Age=28.0, Tenure=9, Balance=135650.82, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=101382.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;

  
  let creditScoreFactor = (850 - CreditScore) / 850;

  
  let balanceFactor = Balance / 10000;

  
  let productsFactor = (NumOfProducts * 0.1) + 0.5;

  
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor) / 5;

  return churnProbability;
}
