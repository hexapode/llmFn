/** // 0.5879412876446856 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15750055, Surname=H?, CreditScore=599, Geography=France, Gender=Male, Age=26.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=156593.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  if (Age <= 37 && EstimatedSalary <= 155000) {
    if (Balance <= 0) {
      return 0; // Customer stays
    } else {
      if (Gender === 'Male' && NumOfProducts <= 1) {
        return 1; // Customer churns
      } else {
        return 0; // Customer stays
      }
    }
  } else {
    if (Geography === 'Germany' && Age <= 40) {
      return 1; // Customer churns
    } else {
      if (CreditScore <= 700) {
        return 1; // Customer churns
      } else {
        return 0; // Customer stays
      }
    }
  }
}
