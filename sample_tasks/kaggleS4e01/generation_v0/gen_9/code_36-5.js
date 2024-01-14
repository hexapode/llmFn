/** // 0.8782639290051844 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15800784, Surname=Istomin, CreditScore=850, Geography=France, Gender=Female, Age=34.0, Tenure=4, Balance=154251.67, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=115668.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 2.07 - IsActiveMember * -1.62); 
  // Add Age as an extra factor in the calculation of tenureFactor
  let tenureFactor = -0.14 * (Tenure / 2.91) - (Age / 111.40);

  let balanceFactor = -0.06 * (Balance / 133105.78) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.19 * (1.93 - CreditScore / 9360.13);
  // Add CreditScore as an extra factor in the calculation of ageFactor
  let ageFactor = 3.09 * (Age / 102.72) - (CreditScore / 5000);
  ageFactor -= (IsActiveMember * 0.13);

  let numOfProductFactor = -3.10 * (NumOfProducts / 11.03) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.19 : -0.11);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179993.73);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  // Add Age as an extra factor in the calculation of genderFactor
  let genderFactor = Gender === 'Female' ? 0.14 : -0.06 + (Age > 28.90 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.00);
  
  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.09,
    E: -0.04,
    V: 0.00,
    I: -0.05,
    S: -0.09,
    A: -0.05,
    N: -0.12,
    O: -0.01,  
    K: 0.01,
    C: 0.04,
    G: -0.02,
    M: -0.02,
    F: -0.04,
    E: -0.04,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.62 : -0.87) + (Tenure > 5.90 ? 0.06 : 0.09);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.07 : 0.00);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.02 : 0.39) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.22 : 0.09 + (NumOfProducts === 2.00 ? 0.06 : -0.01);

  // Add Age as an extra factor in the calculation of customerIdFactor
  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 25.00 ? 0.09 : -0.04);

  let surnameLengthFactor = Surname.length / -499.13 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.18; 
  let highCreditScore = CreditScore > 797.90 ? 0.17 : 0.12;
  let lowAge = Age < 57.00 ? 0.11 : -0.11;

  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.28;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
