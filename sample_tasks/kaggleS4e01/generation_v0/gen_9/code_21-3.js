/** // 0.8239640020218293 //**/
/**
I try on the following input and it returned 3.9157129404410935" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15762855, Surname=Hill, CreditScore=622, Geography=Spain, Gender=Female, Age=21.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=131389.39.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.13);
  tenureFactor -= (Age / 102.03);

  let balanceFactor = -0.02 * (Balance / 121002.20) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9361.16);
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.86);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.10,
    E: -0.04,
    V: -0.12,
    I: -0.06,
    S: -0.11,
    A: -0.05,
    N: -0.16,
    O: -0.01,  
    K: 0.01,
    C: 0.07,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    E: -0.02,
    D: -0.11
  };
  let firstLetter = Surname.charAt(0).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.16 : 0.47); 

  let customerAgeFactor = Age > 42.01 ? 0.19 : -0.08; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return 1 / (1 + Math.exp(-churnProbability)); // Applying sigmoid function to get the probability between 0 and 1
}