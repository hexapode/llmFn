/** // 0.6479734425821311 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15723484, Surname=Chidubem, CreditScore=678, Geography=Germany, Gender=Male, Age=29.0, Tenure=4, Balance=121151.06, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=121513.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 2.54 - IsActiveMember * -1.84) + (Tenure / 100.0);
  
  let tenureFactor = -0.14 * (Tenure / 2.93) - (Age / 123.65) - (NumOfProducts === 2.0 ? 0.06 : 0.0);

  let balanceFactor = -0.07 * (Balance / 146417.47) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CustomerId === 15802487.0 ? 0.08 : 0.0);
  let creditScoreFactor = 1.08 * (1.93 - CreditScore / 18722.25) + (Tenure / 1000.0);
  
  let ageFactor = 3.20 * (Age / 102.72) - (CreditScore / 5002.00) - (NumOfProducts * 0.05);

  let numOfProductFactor = -3.22 * (NumOfProducts / 10.01) + (HasCrCard ? 0.09 : 0.0) + (Gender === 'Male' ? -0.04 : 0.0);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11) + (Balance / 10000.0);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.81) - (NumOfProducts === 3.0 ? 0.07 : 0.0);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02 - (Age / 1000.0);

  
  let genderFactor = Gender === 'Female' ? 0.15 : -0.06 + (Age > 28.99 ? 0.06 : 0.07) + (CustomerId === 15573851.0 ? 0.15 : 0.0);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.0 ? 0.01 : 0.0) + (Tenure > 7 ? 0.04 : 0.0);
  
  let surnameFactors = {
    T: 0.00,
    H: -0.07,
    R: -0.10,
    E: -0.04,
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
  let firstLetter = Surname.charAt(1.0).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.0 ? 0.72 : -0.87) + (Tenure > 5.90 ? 0.06 : 0.09);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.0 ? 0.08 : 0.0) + (EstimatedSalary / 100000.0);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.0) + (CustomerId === 15672966.0 ? 0.10 : 0.0); 
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.04 : 0.41) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.23 : 0.09 + (NumOfProducts === 2.0 ? 0.06 : 0.0) + (IsActiveMember ? 0.05 : 0.0);

  
  let customerIdLastDigit = CustomerId % 8.0;
  let customerIdFactor = customerIdLastDigit > 7.0 ? 0.07 : 0.05 + (Age < 25.0 ? 0.11 : -0.05) + (Balance / 200000.0);

  let surnameLengthFactor = Surname.length / -500.12 + (NumOfProducts === 2.0 ? 0.04 : 0.0) + (Age / 200.0);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.18; 
  let highCreditScore = CreditScore > 797.90 ? 0.18 : 0.12 + (Balance / 50000.0);
  let lowAge = Age < 57.0 ? 0.12 : -0.12;

  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.29 + (EstimatedSalary / 200000.0);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
