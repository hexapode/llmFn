/** // 0.823216515857461 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15602554, Surname=Lucchese, CreditScore=724, Geography=Germany, Gender=Female, Age=44.0, Tenure=7, Balance=115095.72, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=120893.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.04);
  tenureFactor -= (Age / 102.04);

  let balanceFactor = -0.02 * (Balance / 121003.09) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15);
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.17);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

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
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 
  
  // New combination of variables
  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.05 * (tenureNumOfProductRatio - 1.2);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? -0.16 : 0.47); 

  let customerAgeFactor = Age > 42.01 ? 0.19 : -0.08; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let surnameLengthFactor = Surname.length / -1000.00;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor;
  
  return churnProbability;
}
