/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15654880, Surname=Lai, CreditScore=711, Geography=Germany, Gender=Female, Age=39.0, Tenure=9, Balance=171922.72, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=177092.16.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains unchanged)

  let tenureToAgeRatio = Tenure / Age;
  let tenureToAgeFactor = 0.02 * tenureToAgeRatio - 0.08;

  let churnProbability = // ... (previous churnProbability calculation)

  churnProbability += tenureToAgeFactor;

  return churnProbability;
}
