/** // 0.8157506618980215 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15692226, Surname=Bellucci, CreditScore=738, Geography=France, Gender=Female, Age=38.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=47764.99.
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
  
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.08;

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.07 : -0.01);
  let adjustedTenureFactor = tenureFactor + (Age > 58.83 ? -0.08 : 0.26);
  
  let novelCombinationFactor = (Age * NumOfProducts) / (CreditScore + 1);
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + novelCombinationFactor;

  return churnProbability;
}
