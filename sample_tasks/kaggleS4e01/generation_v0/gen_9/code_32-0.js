/** // 0.8659841313031834 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15761168, Surname=Manna, CreditScore=478, Geography=France, Gender=Female, Age=38.0, Tenure=4, Balance=171913.87, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=51820.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 1.60 - IsActiveMember * -1.27) + (Balance > 140000 ? 0.05 : 0);
  let tenureFactor = -0.15 * (Tenure / 2.91) + (Age > 35 ? 0.07 : 0);
  tenureFactor -= (Age / 99.16) - (NumOfProducts === 1.01 ? 0.04 : -0.17);

  let balanceFactor = -0.06 * (Balance / 121005.17) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CreditScore < 500 ? -0.03 : 0.04);
  let creditScoreFactor = 2.08 * (1.93 - CreditScore / 9359.34) + (NumOfProducts > 1.5 ? -0.04 : 0.06);
  let ageFactor = 3.07 * (Age / 104.84) - (IsActiveMember * 0.11) + (Geography === 'France' ? -0.02 : 0);

  let numOfProductFactor = -2.98 * (NumOfProducts / 12.15) + (HasCrCard ? 0.09 : 0.00) + (Tenure > 5 ? 0.05 : -0.04);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.18 : -0.10);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.83) - (CreditScore < 550 ? 0.07 : 0.00);

  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.14 : -0.05 + (Age > 28.90 ? 0.06 : 0.08) + (CreditScore < 500 ? -0.03 : 0);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.00) - (Age > 50 ? -0.02 : 0.02);

  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.09,
    E: -0.04,
    V: 0.00,
    I: -0.06,
    S: -0.09,
    A: -0.05,
    N: -0.12,
    O: -0.02,  
    K: -0.01,
    C: 0.03,
    G: -0.03,
    M: -0.03,
    F: -0.05,
    E: -0.04,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.53 : -0.79) + (IsActiveMember ? 0.12 : 0);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.06 : 0.00) + (CreditScore > 700 ? 0.05 : 0);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00) + (EstimatedSalary > 100000 ? 0.08 : 0);
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.01 : 0.37) + (CreditScore > -699.90 ? 0.08 : 0.09) - (Tenure < 3 ? 0.05 : 0.03);

  let customerAgeFactor = Age > 42.01 ? 0.21 : 0.10 + (NumOfProducts === 2.00 ? 0.06 : -0.01) - (Gender === 'Male' ? -0.02 : 0.03);

  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 27.00 ? 0.07 : -0.02) + (EstimatedSalary > 120000 ? 0.08 : 0);

  let surnameLengthFactor = Surname.length / -998.10 + (NumOfProducts === 2.00 ? 0.04 : 0.00) + (CreditScore > 750 ? 0.07 : 0);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.18 + (Gender === 'Female' ? -0.05 : 0.03); 
  let highCreditScore = CreditScore > 797.90 ? 0.17 : 0.12 - (Age > 40 ? 0.04 : 0.01);
  let lowAge = Age < 57.00 ? 0.11 : -0.10 + (NumOfProducts > 1.5 ? 0.06 : 0.00);

  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99999.19 - (EstimatedSalary > 100000 ? 0.07 : 0.02);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
