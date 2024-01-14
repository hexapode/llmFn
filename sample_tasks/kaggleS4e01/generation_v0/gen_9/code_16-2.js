/** // 0.5073706384350203 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15658852, Surname=Lettiere, CreditScore=632, Geography=France, Gender=Female, Age=31.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=61531.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree algorithm to predict customer churn
  if (Geography === 'Germany') {
    if (Age > 40 && CreditScore > 700) {
      return 0.15; // Low churn probability
    } else {
      return 0.65; // High churn probability
    }
  } else if (Geography === 'Spain') {
    if (Balance > 50000 && IsActiveMember === 1) {
      return 0.25; // Low churn probability
    } else {
      return 0.75; // High churn probability
    }
  } else {
    if (NumOfProducts === 1 && EstimatedSalary < 80000) {
      return 0.1; // Low churn probability
    } else {
      return 0.5; // Medium churn probability
    }
  }
}
