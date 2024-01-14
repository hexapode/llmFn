/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.1544890170197847" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15744894, Surname=McGregor, CreditScore=649, Geography=France, Gender=Female, Age=40.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=155047.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.03 * (Tenure / 8.70);
  let balanceFactor = 0.04 * (Balance / 100000.82);
  let creditScoreFactor = 1.35 * (0.91 - CreditScore / 8510.11);
  let ageFactor = 2.43 * (Age / 98.79);
  let numOfProductFactor = -1.02 * (NumOfProducts / 5.13);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.03 * (EstimatedSalary / 199998.92);
  
  let genderFactor = Gender === 'Female' ? 0.16 : -0.12;
  let geographyFactor = Geography === 'France' ? -0.18 : 0.12;
  
  let surnameFactors = {
    T: -0.04,
    H: -0.08,
    R: -0.06,
    E: -0.07,
    V: -0.07,
    I: -0.08,
    S: -0.08,
    A: -0.06,
    N: -0.07
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.09;

  
  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.06 : -0.02);
  
  let adjustedTenureFactor = tenureFactor + (Age > 59.82 ? 0.02 : 0.14);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor;

  return churnProbability > 0.5 ? 1 : 0;
}
