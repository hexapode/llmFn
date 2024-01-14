/** // 0.5520079063083272 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15641585, Surname=Anenechukwu, CreditScore=663, Geography=France, Gender=Male, Age=40.0, Tenure=3, Balance=128389.12, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=166310.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Decision tree model based on input parameters
  if (Geography === 'France' && NumOfProducts === 1 && Balance <= 80000) {
    // Branch 1
    return 0.2;
  } else if (Geography === 'Germany' && IsActiveMember === 1) {
    // Branch 2
    if (Age <= 45 && CreditScore > 600) {
      return 0.1;
    } else {
      return 0.8;
    }
  } else {
    // Default branch
    if (EstimatedSalary > 150000) {
      return 0.6;
    } else if (Balance <= 50000) {
      return 0.3;
    } else {
      return 0.5;
    }
  }
}
