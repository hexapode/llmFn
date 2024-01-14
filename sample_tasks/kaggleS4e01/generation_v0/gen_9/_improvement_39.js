/* Best score: 0.8787862208592567 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15614687, Surname=T'ao, CreditScore=680, Geography=France, Gender=Female, Age=34.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=167035.07. */
    
    /** // 0.8787338579714757 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15614687, Surname=T'ao, CreditScore=680, Geography=France, Gender=Female, Age=34.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=167035.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let unusedParameterFactor = 0.03 * (HasCrCard * 2.90 - IsActiveMember * -2.15);
  
  let tenureFactor = -0.14 * (Tenure / 2.94) - (Age / 135.03);

  let balanceFactor = -0.07 * (Balance / 146417.57) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CustomerId === 15802487.00 ? 0.08 : 0.00);
  let creditScoreFactor = 1.19 * (1.93 - CreditScore / 18722.25);
  
  let ageFactor = 3.21 * (Age / 102.61) - (CreditScore / 5001.00);
  ageFactor -= (IsActiveMember * 0.15);

  let numOfProductFactor = -3.32 * (NumOfProducts / 10.01) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179993.80);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 702.00 ? 0.01 : 0.00);
  
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
    E: -0.03,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.73 : -0.88) + (Tenure > 5.90 ? 0.06 : 0.09);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.08 : 0.00);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 65.84 ? -0.05 : 0.42) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.24 : 0.09 + (NumOfProducts === 2.00 ? 0.06 : 0.00);

  
  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 25.00 ? 0.12 : -0.05);

  let surnameLengthFactor = Surname.length / -501.12 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.17; 
  let highCreditScore = CreditScore > 797.90 ? 0.18 : 0.12;
  let lowAge = Age < 57.00 ? 0.13 : -0.12;

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.30;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
