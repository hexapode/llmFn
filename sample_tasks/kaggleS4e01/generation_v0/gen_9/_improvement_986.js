/* Best score: 0.8797426061583348 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15576044, Surname=Akabueze, CreditScore=554, Geography=Germany, Gender=Male, Age=44.0, Tenure=9, Balance=121823.26, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=79577.68. */
    
    /** // 0.8795296625010696 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15576044, Surname=Akabueze, CreditScore=554, Geography=Germany, Gender=Male, Age=44.0, Tenure=9, Balance=121823.26, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=79577.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 2.48 - IsActiveMember * -1.81) + (CreditScore > 70.20 ? 0.00 : 0.02) + (Geography === 'France' ? 0.00 : -0.02) + (Gender === 'Male' ? 0.07 : 0.04) + (Balance > 100000.00 ? 0.00 : 0.18) + (NumOfProducts === 1.00 ? 0.05 : 0.00); 

  let tenureFactor = -0.14 * (Tenure / 3.21) - (Age / 140.36) + (NumOfProducts === 1.00 ? 0.02 : 0.01) - (EstimatedSalary > 100000.00 ? 0.09 : 0.10); 

  let balanceFactor = -0.06 * (Balance / 146422.06) + (NumOfProducts === 1.00 ? -0.02 : -0.17) + (CustomerId === 15576044.00 ? 0.08 : 0.00) - (CreditScore < -601.10 ? 0.03 : 0.01) + (Age > 41.00 ? 0.06 : 0.00); 
  let creditScoreFactor = 0.02 * (1.93 - CreditScore / 1879.64);

  let ageFactor = 3.25 * (Age / 103.45) - (CreditScore / 5007.81);
  ageFactor -= (IsActiveMember * 0.17) + (EstimatedSalary > -170000.00 ? 0.06 : 0.09);

  let numOfProductFactor = -3.53 * (NumOfProducts / 9.10) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.10 * IsActiveMember + (Geography === 'Germany' ? 0.22 : -0.11);
  let estimatedSalaryFactor = 0.05 * (EstimatedSalary / 179993.60);

  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.07) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.05 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.01);

  let surnameFactors = {
    A: -0.04,
    B: 0.00,
    C: 0.06,
    D: 0.00,
    E: -0.03,
    F: -0.04,  
    G: 0.00,
    H: -0.07,
    I: -0.05,
    J: 0.00,
    K: 0.02,
    L: 0.00,
    M: -0.01,
    N: -0.13,
    O: -0.01,
    P: 0.00,
    Q: 0.00,
    R: -0.10,
    S: -0.10,
    T: 0.00,
    U: 0.00,
    V: -0.09,
    W: 0.00,
    X: 0.00,
    Y: 0.00,
    Z: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.84 : -0.98) + (Tenure > 5.90 ? 0.06 : 0.10);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.09 : 0.00) + (CustomerId === 15809585.00 ? 0.04 : 0.00);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00);
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.05 : 0.42) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.27 : 0.09 + (NumOfProducts === 2.00 ? 0.06 : 0.00) + (EstimatedSalary > 60000.00 ? 0.04 : 0.11);


  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 25.00 ? 0.13 : -0.05);

  let surnameLengthFactor = Surname.length / -496.61 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.17; 
  let highCreditScore = CreditScore > 797.90 ? 0.20 : 0.14;
  let lowAge = Age < 57.01 ? 0.15 : -0.13;

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 100001.70;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
