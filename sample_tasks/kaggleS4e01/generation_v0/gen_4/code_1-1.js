/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15732903, Surname=Lu, CreditScore=707, Geography=France, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151401.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let probability = 0;

  probability = (CreditScore * 0.1) + (Age * 0.2) - (Balance * 0.15) - (NumOfProducts * 0.05) - (IsActiveMember ? 0.1 : 0.05) - (Tenure * 0.03) + (EstimatedSalary * 0.08);

  return probability;
}
