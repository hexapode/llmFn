/** // 0.48858909731524924 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15658675, Surname=DeRose, CreditScore=696, Geography=Germany, Gender=Male, Age=42.0, Tenure=9, Balance=123917.2, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=180800.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  if (Balance > 80000 && EstimatedSalary > 150000) {
    return 0; // High balance and high salary customers tend to stay
  } else if (CreditScore < 600 && Age > 50) {
    return 1; // Low credit score and older customers are more likely to churn
  } else {
    // For other cases, return a default value
    return 0.5;
  }
}
