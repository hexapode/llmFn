/** // 0.8102109780395021 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15652069, Surname=Okwuadigbo, CreditScore=656, Geography=Spain, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=78955.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.23);
  let creditScoreFactor = 2.02 * (0.93 - CreditScore / 9360.05);
  let ageFactor = 3.04 * (Age / 100.94);
  let balanceFactor = -0.02 * (Balance / 121003.40) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179996.96);
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.12,
    E: -0.04,
    V: -0.13,
    I: -0.06,
    S: -0.13,
    A: -0.06,
    N: -0.17
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.06; 

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.29);
  let combinedFactors = tenureFactor + creditScoreFactor + ageFactor + balanceFactor + isActiveMemberFactor + estimatedSalaryFactor + geographyFactor + hasHighBalanceFactor + genderFactor + surnameFactor + numOfProductFactor;
  
  let churnProbability = 1 / (1 + Math.exp(-combinedFactors));
  
  return churnProbability;
}
