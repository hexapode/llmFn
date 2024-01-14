/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15656901, Surname=Ma, CreditScore=583, Geography=Germany, Gender=Female, Age=59.0, Tenure=8, Balance=153360.02, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=192146.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (existing factors)

  let highSalaryLowBalance = EstimatedSalary > 150000 && Balance < 50000 ? 0.18 : 0.00;
  let ageFactor = (Age > 57.00 ? 0.16 : -0.12) + highSalaryLowBalance;

  // ... (existing factors)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + // ... (other factors)

  return churnProbability;
}
