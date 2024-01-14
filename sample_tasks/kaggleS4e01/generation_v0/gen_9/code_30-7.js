/** // 0.5624351445706611 //**/
/**
I try on the following input and it returned 6.4639160147925" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15662901, Surname=Hu, CreditScore=679, Geography=France, Gender=Male, Age=38.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=61324.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Feature scaling and parameter adjustments
  let balanceFactor = -0.05 * (Balance / 121005.08);
  let creditScoreFactor = -0.002 * CreditScore;
  let ageFactor = 0.01 * Age;
  let tenureFactor = 0.1 * Tenure;
  let numOfProductsFactor = -0.2 * NumOfProducts;
  let hasCrCardFactor = 0.1 * HasCrCard;
  let isActiveMemberFactor = 0.15 * IsActiveMember;
  let estimatedSalaryFactor = 0.000001 * EstimatedSalary;

  // Combine parameters with coefficients
  let combinedParams = balanceFactor + creditScoreFactor + ageFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + isActiveMemberFactor + estimatedSalaryFactor;

  // Calculate churn probability using the sigmoid function
  let churnProbability = 1 / (1 + Math.exp(-combinedParams));

  return churnProbability;
}
