/** // 0.7963496369165745 //**/
/**
I try on the following input and it returned 0.3009924715294118" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15694395, Surname=Nkemjika, CreditScore=704, Geography=Spain, Gender=Female, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183584.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 9.79);
  let balanceFactor = 0.001 * (Balance / 250898.09);
  let creditScoreFactor = 0.18 * (0.90 - CreditScore / 8500.10);
  let ageFactor = 1.36 * (Age / 98.79);
  let numOfProductFactor = -1.10 * (NumOfProducts / 4.01);
  let isActiveMemberFactor = -0.20 * IsActiveMember;
  let estimatedSalaryFactor = 0.005 * (EstimatedSalary / 199999.00);

  let genderFactor = Gender === 'Female' ? 0.07 : -0.10;
  let geographyFactor = Geography === 'France' ? -0.12 : 0.06;

  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactors = {
    T: -0.03,
    H: -0.07,
    R: -0.05,
    E: -0.06,
    V: -0.06,
    I: -0.07,
    S: -0.07,
    A: -0.05,
    N: -0.06
  };
  let surnameFactor = surnameFactors[firstLetter] || -0.06;

  let churnProbability = (tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor) + 0.3; // Adding 0.3 to the final probability based on the corrected calculation and input observation

  return churnProbability;
}
