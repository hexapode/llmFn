/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 5.296100009544222" when the correct class was "1",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 1 for: CustomerId=15589793, Surname=Onwuamaeze, CreditScore=604, Geography=France, Gender=Male, Age=53.0, Tenure=9, Balance=144453.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=190998.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.22);
  tenureFactor -= (Age / 102.02);

  let balanceFactor = -0.02 * (Balance / 121002.29) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9360.15);
  let ageFactor = 3.04 * (Age / 99.95);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.18);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.86);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.01,
    H: -0.09,
    R: -0.11,
    E: -0.04,
    V: -0.12,
    I: -0.06,
    S: -0.12,
    A: -0.05,
    N: -0.16,
    O: -0.01,  
    K: 0.01,
    C: 0.08,
    G: -0.02,
    M: -0.02,
    F: -0.05,
    E: -0.02,
    D: -0.09
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.07; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.16 : 0.47); 

  let customerAgeFactor = Age > 42.01 ? 0.12 : -0.08; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  // Log the churnProbability to debug
  console.log(churnProbability);

  // Return 1 if churnProbability is greater than 0, else return 0
  return churnProbability > 0 ? 1 : 0;
}
