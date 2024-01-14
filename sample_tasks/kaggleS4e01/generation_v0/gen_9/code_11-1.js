/** // 0.5560027419234579 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15705865, Surname=Hsing, CreditScore=587, Geography=France, Gender=Male, Age=37.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=26500.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree algorithm implementation
  if (
    (Age > 50 && Balance > 100000) ||
    (CreditScore < 600 && NumOfProducts > 2) ||
    (IsActiveMember === 0 && EstimatedSalary < 50000)
  ) {
    return 1; // High probability of churn
  } else {
    return 0; // Low probability of churn
  }
}
