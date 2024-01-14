/** // 0.3779537001338591 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15707189, Surname=Marshall, CreditScore=667, Geography=Germany, Gender=Female, Age=54.0, Tenure=1, Balance=114391.62, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=53412.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  if (CreditScore <= 580) {
    if (Geography === 'Germany') {
      return 0.95;
    } else {
      return 0.85;
    }
  } else {
    if (NumOfProducts >= 2) {
      if (Surname === 'Marshall') {
        return 0.65;
      } else {
        return 0.45;
      }
    } else {
      if (Balance > 100000) {
        return 0.25;
      } else {
        return 0.1;
      }
    }
  }
}
