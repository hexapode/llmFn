/** // 0.6257018522720044 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15671299, Surname=Onwuatuegwu, CreditScore=615, Geography=Germany, Gender=Female, Age=44.0, Tenure=9, Balance=139562.08, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=141872.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0;

  // Apply rules and assign weights
  if (Balance > 80000) {
    churnProbability += 0.3;
  }
  if (CreditScore < 700) {
    churnProbability += 0.2;
  }
  if (Tenure < 5) {
    churnProbability += 0.1;
  }
  if (NumOfProducts > 1) {
    churnProbability -= 0.1;
  }
  if (IsActiveMember === 1) {
    churnProbability -= 0.2;
  }

  // Return the churn probability
  return churnProbability;
}
