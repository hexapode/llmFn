/** // 0.5900736033829478 //**/
/**
I try on the following input and it returned 5.077006980138875" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15803801, Surname=Oluchukwu, CreditScore=699, Geography=France, Gender=Male, Age=47.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=198817.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Updated calculation logic will go here
  let ageFactor = (Age / 100.85);
  let tenureFactor = (1 / (1 + Math.exp(-0.05 * (Tenure - 5))));
  let creditScoreFactor = (1 / (1 + Math.exp(-0.01 * (CreditScore - 700))));
  let isActiveMemberFactor = IsActiveMember === 1 ? 0.05 : -0.05;
  let balanceFactor = Balance > 80000 ? 0.1 : -0.1;
  let geographyFactor = Geography === 'Germany' ? 0.1 : (Geography === 'Spain' ? -0.1 : 0);
  let estimatedSalaryFactor = (1 / (1 + Math.exp(-0.0001 * (EstimatedSalary - 100000))));
  
  let churnProbability = 0.5 + (ageFactor * 0.2) + (tenureFactor * 0.3) + (creditScoreFactor * 0.2) + (isActiveMemberFactor * 0.1) + (balanceFactor * 0.1) + (geographyFactor * 0.1) + (estimatedSalaryFactor * 0.1);
  
  return churnProbability;
}
