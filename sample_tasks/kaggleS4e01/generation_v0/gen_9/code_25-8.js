/** // 0.8306459143131532 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15671769, Surname=Nnaife, CreditScore=535, Geography=France, Gender=Male, Age=27.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=106977.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.13 * (Tenure / 3.93);
  tenureFactor -= (Age / 102.05);

  let balanceFactor = -0.03 * (Balance / 121003.19) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.22 * (0.93 - CreditScore / 9360.14);
  let ageFactor = 3.05 * (Age / 100.84);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.86 * (NumOfProducts / 5.28);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.13 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.04); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.10,
    E: -0.04,
    V: -0.11,
    I: -0.06,
    S: -0.11,
    A: -0.06,
    N: -0.16,
    O: -0.01,  
    K: 0.01,
    C: 0.07,
    G: -0.02,
    M: -0.02,
    F: -0.06,
    E: -0.03,
    D: -0.11
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.09; 

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.04 * (tenureNumOfProductRatio - 1.20);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.12 : 0.46); 

  let customerAgeFactor = Age > 42.01 ? 0.20 : -0.04; 

  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let surnameLengthFactor = Surname.length / -1000.00;

  let geoFranceFactor = Geography === 'France' ? 0.06 : 0.00; 
  let highCreditScore = CreditScore > 800.00 ? 0.20 : 0.00;
  let lowAge = Age < 30.00 ? -0.10 : 0.00;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoFranceFactor + highCreditScore + lowAge;

  return churnProbability;
}
