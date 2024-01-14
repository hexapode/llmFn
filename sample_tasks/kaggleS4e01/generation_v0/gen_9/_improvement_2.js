/* Best score: 0.775393101619995 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15568240, Surname=Onwughara, CreditScore=627, Geography=France, Gender=Female, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=90194.46. */
    
    /** // 0.7464851170080631 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15568240, Surname=Onwughara, CreditScore=627, Geography=France, Gender=Female, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=90194.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let creditScoreFactor = 0.31 * (0.98 - CreditScore / 1704.38); 
  let ageFactor = 2.41 * (Age / 98.27); 
  let balanceFactor = 0.16 * (Balance / 360002.10); 
  let activeMemberFactor = 0.08 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.05 * (Tenure / 22.20); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - 0.99); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200001.00);
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor;

  return churnProbability;
}
