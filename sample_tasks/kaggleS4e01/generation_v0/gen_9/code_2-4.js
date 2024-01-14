/** // 0.7464851170080631 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15568240, Surname=Onwughara, CreditScore=627, Geography=France, Gender=Female, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=90194.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let creditScoreFactor = -0.60 * (0.99 - CreditScore / 851.10); 
  let ageFactor = 1.41 * (Age / 98.39); 
  let balanceFactor = 0.08 * (Balance / 180001.96); 
  let activeMemberFactor = 0.09 * (IsActiveMember ? -0.01 : 0.99); 
  
  let tenureFactor = 0.05 * (Tenure / 10); 
  let numOfProductsFactor = -0.1 * (NumOfProducts - 1); 
  let hasCrCardFactor = -0.05 * (HasCrCard ? 0 : 1); 
  let salaryFactor = 0.15 * (EstimatedSalary / 200000);
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor;

  return churnProbability;
}
