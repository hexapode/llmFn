/** // 0.5128512082643841 //**/
/**
I try on the following input and it returned 2.993571381030039" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15696175, Surname=Echezonachukwu, CreditScore=732, Geography=France, Gender=Male, Age=35.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=51695.41.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Simplified calculation based on specific patterns in the input data
  let churnProbability = 0.1; // Base churn probability

  // Adjust churn probability based on specific patterns in the input data
  if (Geography !== 'France') {
    churnProbability += 0.1;
  }

  if (Age > 30 && Age < 50) {
    churnProbability += 0.2;
  }

  if (Balance === 0 && NumOfProducts === 1) {
    churnProbability += 0.2;
  }

  if (IsActiveMember === 0) {
    churnProbability += 0.15;
  }

  // Adjust churn probability based on other input parameters...

  return churnProbability; // Return the final churn probability
}
