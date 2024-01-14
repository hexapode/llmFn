/** // 0.478253981597155 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15772009, Surname=Scott, CreditScore=642, Geography=France, Gender=Female, Age=39.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=152054.33.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree rules based on the input parameters
  if (Geography === 'France') {
    if (Age <= 42 && IsActiveMember === 1) {
      return 0; // Customer stays
    } else {
      return 1; // Customer churns
    }
  } else if (Geography === 'Germany') {
    if (CreditScore > 600 && EstimatedSalary > 100000) {
      return 0; // Customer stays
    } else {
      return 1; // Customer churns
    }
  } else if (Geography === 'Spain') {
    if (Balance === 0 && NumOfProducts === 1) {
      return 1; // Customer churns
    } else {
      return 0; // Customer stays
    }
  } else {
    return 0; // Default prediction: Customer stays
  }
}
