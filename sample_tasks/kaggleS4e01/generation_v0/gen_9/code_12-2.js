/** // 0.8149523811795991 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15607312, Surname=Tseng, CreditScore=602, Geography=Germany, Gender=Male, Age=34.0, Tenure=5, Balance=140197.18, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=144727.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.04 * (Balance / 100000.93);
  let creditScoreFactor = 1.45 * (0.92 - CreditScore / 9361.02);
  let ageFactor = 2.33 * (Age / 99.91);
  let numOfProductFactor = -0.90 * (NumOfProducts / 6.15);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.04);
  
  // Introducing a new factor 'HasHighSalaryFactor' based on EstimatedSalary
  let hasHighSalaryFactor = EstimatedSalary > 100000.0 ? 0.06 : 0.0;
  
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

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.07 : -0.01);
  let adjustedTenureFactor = tenureFactor + (Age > 58.83 ? -0.08 : 0.26);
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + hasHighSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor;

  return churnProbability;
}
