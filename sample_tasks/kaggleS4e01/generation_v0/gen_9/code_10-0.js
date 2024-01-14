/** // 0.45902063538234433 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15670205, Surname=Aksenova, CreditScore=573, Geography=France, Gender=Female, Age=54.0, Tenure=9, Balance=132934.89, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=108398.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree rules
  if (Geography === 'France') {
    if (Age > 50 && IsActiveMember === 1) {
      return 0; // Prediction: Stay
    } else {
      if (CreditScore < 600) {
        return 1; // Prediction: Churn
      } else {
        if (Balance > 100000) {
          return 0; // Prediction: Stay
        } else {
          return 1; // Prediction: Churn
        }
      }
    }
  } else {
    if (NumOfProducts === 1) {
      return 0; // Prediction: Stay
    } else {
      if (EstimatedSalary < 100000) {
        return 1; // Prediction: Churn
      } else {
        return 0; // Prediction: Stay
      }
    }
  }
}
