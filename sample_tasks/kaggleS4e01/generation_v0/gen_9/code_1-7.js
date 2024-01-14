/** // 0.5567930064454628 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15743818, Surname=Craig, CreditScore=596, Geography=France, Gender=Male, Age=40.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=122547.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;

  
  let creditScoreFactor = (850 - CreditScore) / 850;

  
  let balanceFactor = Balance / 10000;

  
  let productsFactor = 1 - (NumOfProducts / 10);

  
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  let estimatedSalaryFactor = EstimatedSalary / 200000; // Adding EstimatedSalary as a factor

  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor + estimatedSalaryFactor) / 6; // Adding estimatedSalaryFactor to the calculation

  return churnProbability;
}
