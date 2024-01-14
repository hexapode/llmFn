/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15790658, Surname=Iqbal, CreditScore=681, Geography=Spain, Gender=Male, Age=42.0, Tenure=8, Balance=0.0, NumOfProducts=3, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=189678.7.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let probability = 0;

  // Introduce the factor combining tenure and activity level
  let tenureActivityFactor = Tenure * (1 - IsActiveMember);

  probability = (CreditScore * 0.1) + (Age * 0.2) - (Balance * 0.15) - (NumOfProducts * 0.05) + (EstimatedSalary * 0.08) - (tenureActivityFactor * 0.1);

  return probability;
}
