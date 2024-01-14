/** // 0.49304770740860643 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15682541, Surname=Martin, CreditScore=518, Geography=France, Gender=Male, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=114083.73.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree based on important features
  if (Geography === 'Germany') {
    if (Age <= 42 && Balance > 80000) {
      return 1; // Churn
    } else {
      return 0; // Stay
    }
  } else if (Geography === 'Spain') {
    if (CreditScore > 700) {
      return 0; // Stay
    } else {
      return 1; // Churn
    }
  } else {
    if (IsActiveMember) {
      return 0; // Stay
    } else {
      if (NumOfProducts > 1) {
        return 1; // Churn
      } else {
        return 0; // Stay
      }
    }
  }
}
