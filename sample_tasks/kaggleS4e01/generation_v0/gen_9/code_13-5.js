/** // 0.6424400192931597 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15696989, Surname=Kao, CreditScore=702, Geography=France, Gender=Male, Age=35.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151401.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0;
  
  // Decision tree rules based on input parameters
  if (Age > 50 && Balance > 80000) {
    churnProbability += 0.2;
  }
  if (NumOfProducts === 1) {
    churnProbability -= 0.1;
  }
  if (Geography === 'Germany') {
    churnProbability += 0.1;
  }
  if (CreditScore < 700) {
    churnProbability += 0.15;
  }
  if (IsActiveMember === 0) {
    churnProbability += 0.05;
  }
  if (HasCrCard === 0) {
    churnProbability += 0.03;
  }
  if (Gender === 'Female') {
    churnProbability += 0.08;
  }
  
  return churnProbability;
}
