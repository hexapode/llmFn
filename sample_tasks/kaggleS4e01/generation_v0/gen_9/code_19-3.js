/** // 0.8038391336264674 //**/
/**
I try on the following input and it returned 4.476004516243542" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15727919, Surname=Chukwuemeka, CreditScore=671, Geography=Spain, Gender=Female, Age=29.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=12048.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.22);
  let balanceFactor = -0.02 * (Balance / 121002.29) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9360.15);
  let ageFactor = 3.04 * (Age / 99.95);
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
  let firstLetter = Surname.charAt(0).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.07; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00); 
  
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor;
  
  return 1 / (1 + Math.exp(-churnProbability)); // Using sigmoid function to return probability between 0 and 1
}
