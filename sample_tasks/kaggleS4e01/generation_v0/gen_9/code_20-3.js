/** // 0.48568941987603376 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15721921, Surname=Ngozichukwuka, CreditScore=584, Geography=Spain, Gender=Female, Age=37.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=93739.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree algorithm implementation to make churn predictions
  if (Geography === 'France') {
    if (NumOfProducts === 1) {
      return 0.1;
    } else {
      if (EstimatedSalary > 80000 && Balance < 5000) {
        return 0.8;
      } else {
        if (Age < 40) {
          return 0.3;
        } else {
          return 0.6;
        }
      }
    }
  } else if (Geography === 'Germany') {
    if (CreditScore > 600) {
      if (Age < 50) {
        return 0.2;
      } else {
        return 0.5;
      }
    } else {
      return 0.9;
    }
  } else {
    if (HasCrCard === 1) {
      if (Balance > 100000) {
        return 0.7;
      } else {
        if (Tenure > 5) {
          return 0.4;
        } else {
          return 0.6;
        }
      }
    } else {
      if (IsActiveMember === 1) {
        return 0.3;
      } else {
        return 0.8;
      }
    }
  }
}
