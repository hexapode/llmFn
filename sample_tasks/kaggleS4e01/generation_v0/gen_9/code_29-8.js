/** // 0.428689453584656 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15712198, Surname=Pisano, CreditScore=651, Geography=France, Gender=Female, Age=27.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=137959.55.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree model
  if (Geography === 'Germany') {
    if (Age > 40 && CreditScore > 700 && Balance > 100000) {
      return 0.9; // High probability of churn
    } else {
      return 0.1; // Low probability of churn
    }
  } else if (Geography === 'France') {
    if (Age < 30 && NumOfProducts > 1) {
      return 0.8; // High probability of churn
    } else {
      return 0.2; // Low probability of churn
    }
  } else {
    if (Gender === 'Female' && IsActiveMember === 1 && EstimatedSalary > 100000) {
      return 0.85; // High probability of churn
    } else {
      return 0.15; // Low probability of churn
    }
  }
}
