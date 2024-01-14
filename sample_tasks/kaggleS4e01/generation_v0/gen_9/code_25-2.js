/** // 0.7344770050468179 //**/
/**
I try on the following input and it returned 3.842711372362069" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15662291, Surname=Chibugo, CreditScore=801, Geography=Spain, Gender=Male, Age=26.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=137835.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.13 * (Tenure / 3.93);
  tenureFactor -= (Age / 102.05);

  let balanceFactor = -0.03 * (Balance / 121003.19) + (NumOfProducts === 1 ? 0.04 : -0.17);
  let creditScoreFactor = 2.22 * (0.93 - CreditScore / 9360.14);
  let ageFactor = 3.05 * (Age / 100.84);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.86 * (NumOfProducts / 5.28);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  
  let hasHighBalance = Balance > 80000 ? 1 : 0; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0;

  let genderFactor = Gender === 'Female' ? 0.13 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.04); 
  
  let surnameFactors = {
    T: -0.02, H: -0.09, R: -0.10, E: -0.04, V: -0.11, I: -0.06, S: -0.11, A: -0.06, N: -0.16,
    O: -0.01, K: 0.01, C: 0.07, G: -0.02, M: -0.02, F: -0.06, D: -0.11
  };
  let firstLetter = Surname.charAt(1).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.09; 
  
  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.04 * (tenureNumOfProductRatio - 1.20);

  let combinedFactors = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + tenureNumOfProductFactor;
  
  let churnProbability = 1 / (1 + Math.exp(-(combinedFactors))); // Using the sigmoid function to convert the combined factors to a probability between 0 and 1
  
  return churnProbability;
}
