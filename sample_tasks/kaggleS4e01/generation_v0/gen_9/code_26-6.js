/** // 0.4935607908596676 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15609187, Surname=Cox, CreditScore=455, Geography=France, Gender=Female, Age=34.0, Tenure=5, Balance=155879.09, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=70774.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.14 * (Tenure / 3.82);
  tenureFactor -= (Age / 101.06);

  let balanceFactor = -0.04 * (Balance / 121004.09) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 3.21 * (0.93 - CreditScore / 9359.15);
  let ageFactor = 3.06 * (Age / 101.83);
  ageFactor -= (IsActiveMember * 0.21);

  let numOfProductFactor = -0.86 * (NumOfProducts / 6.18);
  let isActiveMemberFactor = -0.10 * IsActiveMember + (Geography === 'Germany' ? 0.13 : -0.08);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.85);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.06; 
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.05 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.09,
    R: -0.10,
    E: -0.04,
    V: -0.11,
    I: -0.06,
    S: -0.11,
    A: -0.06,
    N: -0.15,
    O: -0.01,  
    K: 0.01,
    C: 0.06,
    G: -0.02,
    M: -0.02,
    F: -0.06,
    E: -0.03,
    D: -0.11
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.05 * (tenureNumOfProductRatio - 1.20);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.04 : 0.47); 

  let customerAgeFactor = Age > 42.01 ? 0.20 : -0.04; 

  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let surnameLengthFactor = Surname.length / -999.01;

  let geoFranceFactor = Geography === 'France' ? 0.07 : 0.09; 
  let highCreditScore = CreditScore > 800.90 ? 0.19 : 0.11;
  let lowAge = Age < 58.00 ? 0.00 : -0.09;
  
  // Additional variable and factor
  let balanceNumOfProductRatio = Balance / NumOfProducts;
  let balanceNumOfProductFactor = -0.03 * (balanceNumOfProductRatio / 3.50);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoFranceFactor + highCreditScore + lowAge + balanceNumOfProductFactor;

  return churnProbability;
}
