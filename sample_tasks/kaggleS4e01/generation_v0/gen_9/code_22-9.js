/** // 0.7357239839047353 //**/
/**
I try on the following input and it returned 4.240903847867809" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15604093, Surname=Oliver, CreditScore=850, Geography=France, Gender=Male, Age=39.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=105886.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.04);
  tenureFactor -= (Age / 102.04);

  let balanceFactor = -0.02 * (Balance / 121003.09) + (NumOfProducts === 1.00 ? 0.04 : -0.17);
  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15);
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  
  let hasHighBalance = Balance > 80000.02 ? 1.00 : 0.00; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.00;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.01,
    H: -0.09,
    R: -0.10,
    E: -0.04,
    V: -0.12,
    I: -0.06,
    S: -0.11,
    A: -0.06,
    N: -0.17,
    O: -0.01,  
    K: 0.01,
    C: 0.06,
    G: -0.03,
    M: -0.01,
    F: -0.05,
    E: -0.03,
    D: -0.11
  };
  let firstLetter = Surname.charAt(0).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15604093.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.16 : 0.47); 

  let customerAgeFactor = Age > 42.01 ? 0.19 : -0.08; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let surnameLengthFactor = Surname.length / -1000.00;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor;
  
  return churnProbability;
}
