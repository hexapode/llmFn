/** // 0.6061611280712506 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15685500, Surname=Ch'ang, CreditScore=735, Geography=Germany, Gender=Male, Age=40.0, Tenure=6, Balance=133845.36, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176868.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let churnProbability = 0.0;

  // Decision tree based on input features
  if (Age <= 45) {
    if (Balance <= 100000) {
      if (Geography === 'Germany' && CreditScore > 700) {
        churnProbability = 0.2;
      } else {
        churnProbability = 0.1;
      }
    } else {
      churnProbability = 0.3;
    }
  } else {
    if (IsActiveMember === 1) {
      churnProbability = 0.05;
    } else {
      if (NumOfProducts <= 2) {
        churnProbability = 0.15;
      } else {
        churnProbability = 0.25;
      }
    }
  }

  return churnProbability;
}
