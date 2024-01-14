/** // 0.5982919975642363 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15730076, Surname=Osborne, CreditScore=651, Geography=France, Gender=Male, Age=45.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=67740.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... [existing code]

  let novelCombinationFactor = (CreditScore / 400) * (Age / 100) * (NumOfProducts / 3) * (Balance / 100000);
  
  // ... [existing code]

  let churnProbability = // ... [existing code]
    + novelCombinationFactor;

  return churnProbability;
}
