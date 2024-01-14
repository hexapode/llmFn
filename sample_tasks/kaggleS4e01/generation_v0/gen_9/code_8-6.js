/** // 0.7953480908276583 //**/
/**
I try on the following input and it returned 1.391698719863289" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15788183, Surname=Longo, CreditScore=554, Geography=Germany, Gender=Male, Age=45.0, Tenure=8, Balance=103741.14, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=47428.73.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let customerIdFactor = (CustomerId - 15566541.99) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.37 * (1.98 - CreditScore / 1706.46); 
  let ageFactor = 2.86 * (Age / 105.89); 
  let balanceFactor = -0.04 * (Balance / 250898.09); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.05 * (Tenure / 18.88); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - 1); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 199992.48);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.06 : 0.16);
  
  let surnameFactors = {
    O: 0.03,
    H: 0.00,
    K: 0.06,
    C: 0.08,
    G: 0.02,
    M: 0.04,
    F: 0.03,
    R: -0.02,
    T: -0.00,
    E: 0.04
  };
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.01;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor;

  return churnProbability;
}
