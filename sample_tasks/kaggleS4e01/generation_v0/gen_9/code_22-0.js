/** // 0.7289401301473268 //**/
/**
I try on the following input and it returned 4.818030247081076" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15602354, Surname=T'ien, CreditScore=775, Geography=France, Gender=Female, Age=45.0, Tenure=8, Balance=82498.14, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=46864.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.04);
  let balanceFactor = -0.02 * (Balance / 121003.09) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15);
  let ageFactor = 3.04 * (Age / 100.85);
  let numOfProductFactor = -0.97 * (NumOfProducts / 4.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  let hasHighBalanceFactor = Balance > 80000.02 ? 2.17 : 0.02;
  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03);

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + hasHighBalanceFactor + genderFactor + geographyFactor
  
  return 1 / (1 + Math.exp(-churnProbability));
}
