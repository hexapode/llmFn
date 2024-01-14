/** // 0.370188768516115 //**/
/**
I try on the following input and it returned 4.032707498707139" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15593601, Surname=P'eng, CreditScore=602, Geography=Spain, Gender=Male, Age=37.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=126796.69.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5);
  let creditScoreFactor = -0.02 * (CreditScore / 936);
  let ageFactor = -0.02 * (Age / 100);
  let balanceFactor = (Balance > 0) ? -0.1 : 0.1;
  let numOfProductFactor = (NumOfProducts === 2) ? -0.05 : 0.05;
  let isActiveMemberFactor = IsActiveMember ? -0.15 : 0.15;
  let estimatedSalaryFactor = -0.02 * (EstimatedSalary / 126796.69);
  let geographyFactor = (Geography === 'Spain') ? 0.1 : 0;
  let genderFactor = (Gender === 'Male') ? 0.05 : -0.05;
  let churnProbability = tenureFactor + creditScoreFactor + ageFactor + balanceFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + genderFactor;

  return churnProbability;
}
