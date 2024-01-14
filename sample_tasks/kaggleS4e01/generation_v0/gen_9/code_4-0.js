/** // 0.4876964474135317 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15809905, Surname=Koger, CreditScore=682, Geography=Germany, Gender=Male, Age=46.0, Tenure=1, Balance=139973.65, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=30807.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  if (Geography === 'France') {
    if (Age <= 40) {
      if (NumOfProducts <= 1) {
        return 0; // stay
      } else {
        if (Balance > 100000) {
          return 1; // churn
        } else {
          return 0; // stay
        }
      }
    } else {
      if (CreditScore > 600) {
        return 0; // stay
      } else {
        if (IsActiveMember === 1 && HasCrCard === 1) {
          return 1; // churn
        } else {
          return 0; // stay
        }
      }
    }
  } else if (Geography === 'Germany') {
    if (Age <= 45) {
      if (IsActiveMember === 1 || HasCrCard === 1) {
        return 0; // stay
      } else {
        if (NumOfProducts === 1) {
          return 1; // churn
        } else {
          return 0; // stay
        }
      }
    } else {
      return 0; // stay
    }
  } else {
    if (Age <= 50) {
      if (Balance > 120000) {
        return 1; // churn
      } else {
        return 0; // stay
      }
    } else {
      if (CreditScore > 650 && IsActiveMember === 0) {
        return 1; // churn
      } else {
        return 0; // stay
      }
    }
  }
}
