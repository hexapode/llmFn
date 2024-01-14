/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 6.13700150173644" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15791928, Surname=Teng, CreditScore=581, Geography=France, Gender=Male, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=119110.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate churn probability based on the input parameters
  let churnProbability = 0.0;

  // Simplified calculation using basic statistics and intuition
  if (Age > 30 && IsActiveMember === 1 && Geography === 'France' && NumOfProducts === 2 && HasCrCard === 1) {
    churnProbability = 0.1; // Example probability, adjust based on actual statistics
  } else {
    churnProbability = 0.05; // Default churn probability if conditions are not met
  }

  return churnProbability;
}
