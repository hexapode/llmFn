/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15757897, Surname=Y?an, CreditScore=648, Geography=France, Gender=Male, Age=38.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=149853.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  

  let probability = 0;

  // Calculate the probability of customer churn based on the input variables
  probability = (CreditScore * 0.1) + (Age * 0.2) - (Balance * 0.15) - (NumOfProducts * 0.05) - (IsActiveMember ? 0.1 : 0.05) + (EstimatedSalary * 0.08) + (Tenure * 0.03);

  
  return probability;
}
