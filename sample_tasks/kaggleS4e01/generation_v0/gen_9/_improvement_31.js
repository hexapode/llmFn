/* Best score: 0.8780758407730496 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15660301, Surname=T'ien, CreditScore=563, Geography=France, Gender=Male, Age=43.0, Tenure=7, Balance=146425.31, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139435.54. */
    
    /** // 0.8777806441132462 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15660301, Surname=T'ien, CreditScore=563, Geography=France, Gender=Male, Age=43.0, Tenure=7, Balance=146425.31, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139435.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let unusedParameterFactor = 0.03 * (HasCrCard * 1.60 - IsActiveMember * -1.27); 
  let tenureFactor = -0.15 * (Tenure / 2.91);
  tenureFactor -= (Age / 99.16);

  let balanceFactor = -0.06 * (Balance / 121005.17) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.08 * (1.93 - CreditScore / 9359.34);
  let ageFactor = 3.07 * (Age / 104.84);
  ageFactor -= (IsActiveMember * 0.11);

  let numOfProductFactor = -2.98 * (NumOfProducts / 12.15) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.18 : -0.10);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.83);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.14 : -0.05 + (Age > 28.90 ? 0.06 : 0.08);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.00);
  
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
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.53 : -0.79);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.06 : 0.00);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.01 : 0.37) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.21 : 0.10 + (NumOfProducts === 2.00 ? 0.06 : -0.01);

  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 27.00 ? 0.07 : -0.02);

  let surnameLengthFactor = Surname.length / -998.10 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.18; 
  let highCreditScore = CreditScore > 797.90 ? 0.17 : 0.12;
  let lowAge = Age < 57.00 ? 0.11 : -0.10;

  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99999.19;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
