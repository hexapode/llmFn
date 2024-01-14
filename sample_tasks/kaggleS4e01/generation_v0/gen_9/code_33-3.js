/** // 0.7893493421136706 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15715519, Surname=Romani, CreditScore=658, Geography=France, Gender=Female, Age=32.0, Tenure=1, Balance=109330.06, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=56191.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let balanceFactor = -0.06 * (Balance / 121005.17) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.08 * (1.93 - CreditScore / 9359.34);
  let ageFactor = 3.07 * (Age / 104.84);
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
  let customerIdLastDigit = CustomerId % 8.00;
  let customerIdFactor = customerIdLastDigit > 7.00 ? 0.07 : 0.05 + (Age < 27.00 ? 0.07 : -0.02);
  let combinedFactors = balanceFactor + creditScoreFactor + ageFactor + hasHighBalanceFactor + genderFactor + geographyFactor + surnameFactor + tenureNumOfProductFactor + customerIdFactor;
  let sigmoid = 1 / (1 + Math.exp(-combinedFactors));
  return sigmoid;
}
