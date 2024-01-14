/** // 0.8183788686206029 //**/
/**
I try on the following input and it returned 2.9517864275427654" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15641629, Surname=Ch'in, CreditScore=581, Geography=Spain, Gender=Male, Age=36.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=41233.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = -0.01 * (Balance / 100001.92) + (NumOfProducts === 1.00 ? 0.03 : -0.18);
  let creditScoreFactor = 1.54 * (0.92 - CreditScore / 9359.93);
  let ageFactor = 2.13 * (Age / 102.03);
  let numOfProductFactor = -0.88 * (NumOfProducts / 5.37);
  let isActiveMemberFactor = -0.22 * IsActiveMember + (Geography === 'Germany' ? 0.13 : 0.00);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179998.16);
  let genderFactor = Gender === 'Female' ? 0.07 : -0.07;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.06 : 0.02);

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
