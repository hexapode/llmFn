/** // 0.5275634438916643 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15709920, Surname=Ekechukwu, CreditScore=576, Geography=Germany, Gender=Male, Age=37.0, Tenure=9, Balance=115409.18, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=69361.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  if (Geography === 'Germany' && Age > 35 && EstimatedSalary < 80000) {
    return 0.8; // high probability of customer churn
  } else if (Balance > 100000 && NumOfProducts === 2 && IsActiveMember === 0) {
    return 0.7; // moderate probability of customer churn
  } else if (CreditScore < 600 && Age < 40 && HasCrCard === 0) {
    return 0.9; // very high probability of customer churn
  } else {
    return 0.2; // low probability of customer churn
  }
}
