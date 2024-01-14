/* Best score: 0.8766540189054547 */


    /* Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15713819, Surname=Pagnotto, CreditScore=473, Geography=Germany, Gender=Male, Age=41.0, Tenure=5, Balance=121205.09, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=147822.14. */
    
    /** // 0.8742105187920631 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15713819, Surname=Pagnotto, CreditScore=473, Geography=Germany, Gender=Male, Age=41.0, Tenure=5, Balance=121205.09, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=147822.14.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Your previous implementation
  let unusedParameterFactor = 0.02 * (HasCrCard * -0.61 - IsActiveMember * -0.06); // Impact of unused parameters
  let tenureFactor = -0.15 * (Tenure / 2.81);
  tenureFactor -= (Age / 99.16);

  let balanceFactor = -0.05 * (Balance / 121005.08) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.20 * (1.93 - CreditScore / 9359.34);
  let ageFactor = 3.06 * (Age / 103.73);
  ageFactor -= (IsActiveMember * 0.11);

  let numOfProductFactor = -2.76 * (NumOfProducts / 13.37) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.10 * IsActiveMember + (Geography === 'Germany' ? 0.16 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.83);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.13 : -0.05 + (Age > 28.90 ? 0.06 : 0.10);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.01) + (CreditScore > 701.00 ? 0.01 : 0.00);
  
  let surnameFactors = {
    T: 0.00,
    H: -0.08,
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
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 0.95 : -0.89);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.10 ? 0.05 : 0.00);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 64.84 ? -0.01 : 0.36) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.20 : 0.10 + (NumOfProducts === 2.00 ? 0.06 : -0.01);

  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 29.00 ? 0.06 : 0.00);

  let surnameLengthFactor = Surname.length / -999.09 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.08 : 0.18; 
  let highCreditScore = CreditScore > 797.90 ? 0.17 : 0.12;
  let lowAge = Age < 57.00 ? 0.11 : -0.10;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterFactor;

  return churnProbability;
}
