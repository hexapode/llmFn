/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15591036, Surname=McEwan, CreditScore=667, Geography=France, Gender=Female, Age=29.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=92865.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree algorithm to predict churn probability
  if (Age <= 30 && IsActiveMember === 0 && NumOfProducts === 2 && Balance === 0) {
    return 0.05; // Low churn probability
  } else if (Age > 30 && Age <= 40 && IsActiveMember === 0 && NumOfProducts === 1 && CreditScore > 600) {
    return 0.15; // Medium churn probability
  } else if (Age > 40 && Age <= 50 && IsActiveMember === 1 && NumOfProducts === 1 && Balance > 50000) {
    return 0.85; // High churn probability
  } else {
    return 0.3; // Default churn probability
  }
}
