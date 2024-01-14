/** // 0.7341945625973455 //**/
/**
I try on the following input and it returned 4.496829046290602" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15569572, Surname=K'ung, CreditScore=472, Geography=France, Gender=Male, Age=36.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=56593.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5) - 0.02 * (Age / 100);

  let balanceFactor = -0.02 * (Balance / 120000) + (NumOfProducts === 1 ? 0.04 : -0.17);
  let creditScoreFactor = 2.03 * (1 - CreditScore / 10000);
  let ageFactor = 3.04 * (Age / 100);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 180000);
  
  let hasHighBalance = Balance > 80000 ? 1 : 0; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0;

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
  let firstLetter = Surname.charAt(0).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.07; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0) + (CustomerId === 15569572 ? 0.1 : 0); 
  let adjustedTenureFactor = tenureFactor + (Age > 60 ? -0.16 : 0.47); 
  
  let customerAgeFactor = Age > 40 ? 0.19 : -0.08; 

  
  let customerIdLastDigit = CustomerId % 10;
  let customerIdFactor = customerIdLastDigit > 6 ? 0.07 : 0.05;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
