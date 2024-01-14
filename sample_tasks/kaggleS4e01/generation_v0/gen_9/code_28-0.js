/** // 0.5741470936940061 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15692671, Surname=Fiorentini, CreditScore=742, Geography=Germany, Gender=Male, Age=45.0, Tenure=9, Balance=128743.55, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=102930.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Existing code...

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20);

  // Other factors and calculations...

  let churnProbability = /* Sum of all factors */ + tenureNumOfProductFactor;

  return churnProbability;
}
