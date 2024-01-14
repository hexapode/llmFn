/** // 0.8211747486075166 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15578738, Surname=Tuan, CreditScore=609, Geography=France, Gender=Female, Age=32.0, Tenure=7, Balance=71872.19, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=151924.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Variables and their coefficients
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.00 * (Balance / 100001.92) + (NumOfProducts === 1.00 ? 0.03 : -0.09);
  let creditScoreFactor = 1.44 * (0.92 - CreditScore / 9361.02);
  let ageFactor = 2.24 * (Age / 100.92);
  let numOfProductFactor = -0.89 * (NumOfProducts / 6.26);
  let isActiveMemberFactor = -0.21 * IsActiveMember + (Geography === 'Germany' ? 0.12 : 0.01);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.05);
  let hasHighBalance = Balance > 80000.01 ? 1.01 : 0.01;
  let hasHighBalanceFactor = hasHighBalance ? 1.16 : 0.01;
  let genderFactor = Gender === 'Female' ? 0.07 : -0.06;
  let geographyFactor = Geography === 'France' ? -0.08 : (Geography === 'Spain' ? -0.06 : 0.00);
  
  // New variable and coefficient
  let ageBalanceRatio = (Age * Balance) / 1000000.0; 
  let ageBalanceRatioFactor = 0.007 * ageBalanceRatio;

  // Calculation
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
  let adjustedTenureFactor = tenureFactor + (Age > 59.83 ? -0.08 : 0.27);

  // Adding the new variable to the churn probability calculation
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + ageBalanceRatioFactor;

  return churnProbability;
}
