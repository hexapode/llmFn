/** // 0.5676811567460667 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15680767, Surname=Ross, CreditScore=696, Geography=Spain, Gender=Female, Age=60.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=156774.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0;

  // Rule 1: If the customer is from Spain, add a positive weight to the churn probability
  if (Geography === 'Spain') {
    churnProbability += 0.1;
  }

  // Rule 2: If the customer's age is over 50, add a positive weight to the churn probability
  if (Age > 50) {
    churnProbability += 0.15;
  }

  // Rule 3: If the customer is an active member, add a negative weight to the churn probability
  if (IsActiveMember) {
    churnProbability -= 0.05;
  }

  return churnProbability;
}
