/** // 0.44565618157348935 //**/
/**
I try on the following input and it returned 3.9879684505453428" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15591711, Surname=P'eng, CreditScore=675, Geography=France, Gender=Male, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=64345.4.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.039 * Tenure;
  let creditScoreFactor = -0.002 * CreditScore;
  let ageFactor = 0.12 * Age;
  let balanceFactor = -0.0003 * Balance;
  let numOfProductFactor = 0.05 * NumOfProducts;
  let isActiveMemberFactor = -0.2 * IsActiveMember;
  let estimatedSalaryFactor = 0.0003 * EstimatedSalary;
  
  let geographyFactor = (Geography === 'Germany' ? 0.1 : (Geography === 'Spain' ? 0.05 : 0));
  let genderFactor = (Gender === 'Female' ? -0.1 : 0);
  let hasCrCardFactor = (HasCrCard === 1 ? 0.05 : 0);
  
  let churnProbability = 0.5 + tenureFactor + creditScoreFactor + ageFactor + balanceFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor + hasCrCardFactor;
  
  return churnProbability;
}
