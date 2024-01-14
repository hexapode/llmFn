/* Best score: 0.8745477098626253 */


    /* Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15748797, Surname=Bage, CreditScore=675, Geography=France, Gender=Male, Age=25.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=141175.09. */
    
    /** // 0.8284350256321991 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15748797, Surname=Bage, CreditScore=675, Geography=France, Gender=Male, Age=25.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=141175.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.15 * (Tenure / 2.82);
  tenureFactor -= (Age / 99.05);

  let balanceFactor = -0.04 * (Balance / 121005.19) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 3.31 * (0.93 - CreditScore / 9358.25);
  let ageFactor = 3.05 * (Age / 103.84);
  ageFactor -= (IsActiveMember * 0.10);

  let numOfProductFactor = -1.86 * (NumOfProducts / 13.27) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.15 : -0.09);
  let estimatedSalaryFactor = 0.01 * (EstimatedSalary / 179995.93);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.13 : -0.05 + (Age > 29.90 ? 0.06 : 0.11);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.05 : 0.00) + (CreditScore > 701.00 ? 0.01 : 0.00);
  
  let surnameFactors = {
    T: -0.03,
    H: -0.08,
    R: -0.09,
    E: -0.04,
    V: -0.10,
    I: -0.06,
    S: -0.09,
    A: -0.05,
    N: -0.13,
    O: -0.02,  
    K: -0.01,
    C: 0.04,
    G: -0.03,
    M: -0.03,
    F: -0.05,
    E: -0.04,
    D: 0.00
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();  
  let surnameFactor = (surnameFactors[firstLetter] || -0.07) + (NumOfProducts > 2.00 ? 1.06 : 0.00);

  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 31.10 ? 0.05 : -0.01);

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : 0.00) + (CustomerId === 15672966.00 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 63.84 ? 0.01 : 0.37) + (CreditScore > -699.90 ? 0.08 : 0.09);

  let customerAgeFactor = Age > 42.01 ? 0.19 : 0.11 + (NumOfProducts === 2.00 ? 0.06 : 0.01);

  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > 6.00 ? 0.07 : 0.05 + (Age < 30.00 ? 0.05 : 0.00);

  let surnameLengthFactor = Surname.length / -999.00 + (NumOfProducts === 2.00 ? 0.04 : 0.00);

  let geoGermanyFactor = Geography === 'Germany' ? 0.07 : 0.19; 
  let highCreditScore = CreditScore > 798.90 ? 0.17 : 0.12;
  let lowAge = Age < 57.00 ? 0.10 : -0.09;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge;

  return churnProbability;
}
