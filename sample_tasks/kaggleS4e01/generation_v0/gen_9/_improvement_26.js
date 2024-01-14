/* Best score: 0.8363182295456288 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15793331, Surname=Chinedum, CreditScore=614, Geography=Germany, Gender=Female, Age=35.0, Tenure=0, Balance=133598.38, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=177655.68. */
    
    /** // 0.8341347739381051 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15793331, Surname=Chinedum, CreditScore=614, Geography=Germany, Gender=Female, Age=35.0, Tenure=0, Balance=133598.38, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=177655.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.14 * (Tenure / 2.92);
  tenureFactor -= (Age / 100.06);

  let balanceFactor = -0.03 * (Balance / 121005.20) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.32 * (0.93 - CreditScore / 9359.24);
  let ageFactor = 3.06 * (Age / 102.83);
  ageFactor -= (IsActiveMember * 0.20);

  let numOfProductFactor = -0.75 * (NumOfProducts / 14.38);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.08);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.84);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.05; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.00); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.08,
    R: -0.10,
    E: -0.04,
    V: -0.11,
    I: -0.06,
    S: -0.10,
    A: -0.05,
    N: -0.14,
    O: -0.01,  
    K: 0.01,
    C: 0.05,
    G: -0.02,
    M: -0.02,
    F: -0.06,
    E: -0.03,
    D: -0.10
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? 0.00 : 0.38); 

  let customerAgeFactor = Age > 42.01 ? 0.20 : 0.00; 

  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let surnameLengthFactor = Surname.length / -999.01;

  let geoGermanyFactor = Geography === 'Germany' ? 0.07 : 0.09; 
  let highCreditScore = CreditScore > 799.90 ? 0.18 : 0.12;
  let lowAge = Age < 57.00 ? 0.10 : -0.09;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge;

  return churnProbability;
}
