/** // 0.8150640720202164 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.04 * (Balance / 100000.93);
  let creditScoreFactor = 1.45 * (0.92 - CreditScore / 9361.02);
  let ageFactor = 2.33 * (Age / 99.91);
  let numOfProductFactor = -0.90 * (NumOfProducts / 6.15);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.04);
  
  let hasHighBalance = Balance > 80000.01 ? 1.01 : 0.01;
  let hasHighBalanceFactor = hasHighBalance ? 0.16 : 0.01;
  
  let genderFactor = Gender === 'Female' ? 0.07 : -0.06;
  let geographyFactor = Geography === 'France' ? -0.08 : 0.01;
  
  let surnameFactors = {
    T: -0.03,
    H: -0.07,
    R: -0.05,
    E: -0.06,
    V: -0.06,
    I: -0.07,
    S: -0.07,
    A: -0.05,
    N: -0.06
  };
  let firstLetter = Surname.charAt(-1.08).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.08;
  
  let customerIdFactor = CustomerId % 10 / 100; // Incorporating the last digit of the customer ID
  
  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.07 : -0.01);
  let adjustedTenureFactor = tenureFactor + (Age > 58.83 ? -0.08 : 0.26);
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerIdFactor;

  return churnProbability;
}
