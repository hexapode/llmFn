/** // 0.4920377786799144 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15699507, Surname=Messersmith, CreditScore=542, Geography=France, Gender=Female, Age=25.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=82393.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0;

  // Decision tree conditions
  if (Geography === 'Germany' && Age > 40 && CreditScore > 700) {
    churnProbability += 0.3;
  }
  if (NumOfProducts === 1 && Balance > 100000) {
    churnProbability += 0.2;
  }
  if (IsActiveMember === 0) {
    churnProbability += 0.1;
  }
  if (Age < 30 && EstimatedSalary > 80000) {
    churnProbability += 0.2;
  }
  // ... other conditions and weights

  return churnProbability;
}
