/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15617482, Surname=Fyodorov, CreditScore=623, Geography=France, Gender=Male, Age=45.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=85787.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (existing factors)

  let lowTenureFactor = Tenure <= 2.00 ? 0.10 : 0.00; 
  let lowBalanceFactor = Balance === 0.00 ? 0.15 : 0.00;

  // ... (existing factors)

  let churnProbability = // ... (the sum of all factors) + lowTenureFactor + lowBalanceFactor;
  
  return churnProbability;
}
