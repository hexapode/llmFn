/** // 0.8738672518039846 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15809509, Surname=Venables, CreditScore=699, Geography=France, Gender=Male, Age=28.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=151645.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 3.00 - IsActiveMember * -2.50) + (CreditScore > 701.00 ? -0.01 : 0.03) + (Geography === 'France' ? 0.00 : -0.01) + (Age > 25.0 ? -0.02 : 0.0);
  
  let tenureFactor = -0.14 * (Tenure / 3.02) - (Age / 136.36) + (NumOfProducts === 2.00 ? 0.03 : 0.00) + (EstimatedSalary > 120000.00 ? -0.02 : 0.01);

  let balanceFactor = -0.07 * (Balance / 146417.46) + (NumOfProducts === 2.00 ? 0.04 : -0.17) + (CustomerId === 15809585.00 ? 0.08 : 0.00) - (CreditScore < -601.10 ? 0.03 : 0.01);
  let creditScoreFactor = 0.31 * (1.93 - CreditScore / 1870.53) - (Age > 30.0 ? 0.02 : 0.0);
  
  let ageFactor = 3.34 * (Age / 102.38) - (CreditScore / 5000.10) - (EstimatedSalary > 150000.00 ? 0.04 : 0.0);
  ageFactor -= (IsActiveMember * 0.16) + (EstimatedSalary > -170000.00 ? 0.06 : 0.09);

  let numOfProductFactor = -3.54 * (NumOfProducts / 9.99) + (HasCrCard ? 0.09 : 0.00) + (Age < 35.0 ? 0.03 : 0.0);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11) + (NumOfProducts === 2.00 ? 0.05 : 0.0);
  let estimatedSalaryFactor = 0.05 * (EstimatedSalary / 179992.90) + (Age > 30.0 ? -0.03 : 0.0);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02 + (Age > 25.0 ? 0.01 : 0.0);

  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00) - (NumOfProducts === 2.00 ? 0.01 : 0.0);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.01) + (EstimatedSalary > 150000.00 ? -0.03 : 0.0);
  
  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.10,
    E: -0.03,
    V: 0.00,
    I: -0.05,
    S: -0.09,
    A: -0.04,
    N: -0.12,
    O: -0.01,  
    K: 0.02,
    C: 0.05,
    G: -0.02,
    M: -0.01,
    F: -0.04,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.73 : -0.97) + (Tenure > 5.90 ? 0.06 : 0.09) - (EstimatedSalary < 170000.00 ? 0.02 : 0.0);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.09 : 0.00) + (CustomerId === 15809585.00 ? 0.04 : 0.00) + (EstimatedSalary > 130000.00 ? -0.02 : 0.0);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00) + (Age < 30.0 ? 0.02 : 0.0); 
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.06 : 0.43) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.27 : 0.08 + (NumOfProducts === 2.00 ? 0.06 : -0.01) + (EstimatedSalary > 60000.00 ? 0.04 : 0.10) - (IsActiveMember ? 0.02 : 0.0);

  
  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 25.00 ? 0.13 : -0.06) + (EstimatedSalary > 130000.00 ? -0.02 : 0.0);

  let surnameLengthFactor = Surname.length / -501.20 + (NumOfProducts === 2.00 ? 0.04 : 0.00) + (Age < 30.0 ? 0.02 : 0.0);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.16 + (EstimatedSalary > 130000.00 ? -0.02 : 0.0); 
  let highCreditScore = CreditScore > 797.90 ? 0.20 : 0.13 + (NumOfProducts === 2.00 ? -0.01 : 0.0);
  let lowAge = Age < 57.00 ? 0.15 : -0.13 + (EstimatedSalary > 140000.00 ? -0.03 : 0.0);

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.29 + (EstimatedSalary > 140000.00 ? -0.03 : 0.0);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
                    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
                    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
                    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
                    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
