/** // 0.44947221637029927 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15588248, Surname=Hs?, CreditScore=617, Geography=France, Gender=Female, Age=46.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=7597.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree logic to predict churn probability
  if (CreditScore <= 619) {
    if (Geography === 'Germany') {
      return 0.56;
    } else {
      if (NumOfProducts <= 1) {
        return 0.32;
      } else {
        return 0.21;
      }
    }
  } else {
    if (Age <= 43) {
      return 0.14;
    } else {
      if (Balance <= 0) {
        return 0.08;
      } else {
        return 0.03;
      }
    }
  }
}
