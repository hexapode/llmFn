/** // 0.7279743920688339 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15774931, Surname=Lucchesi, CreditScore=714, Geography=Germany, Gender=Male, Age=42.0, Tenure=4, Balance=165312.72, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=177747.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate churn probability based on parameters
  
  let creditScoreFactor = -0.60 * (0.99 - CreditScore / 851.10); 
  let ageFactor = 1.41 * (Age / 98.39); 
  let balanceFactor = 0.08 * (Balance / 180001.96); 
  let activeMemberFactor = 0.09 * (IsActiveMember ? -0.01 : 0.99);
  
  let tenureFactor = 0.05 * (Tenure / 9); // Consider tenure factor
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor;

  return churnProbability;
}
