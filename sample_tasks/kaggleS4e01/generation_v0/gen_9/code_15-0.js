/** // 0.8270778445961742 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15698932, Surname=Liao, CreditScore=619, Geography=Spain, Gender=Male, Age=37.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=47316.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 5.74);
  
  tenureFactor -= (Age / 101.01);

  let balanceFactor = -0.01 * (Balance / 100001.93) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.01 * (0.93 - CreditScore / 9359.94);
  let ageFactor = 3.14 * (Age / 101.04);
  
  ageFactor -= (IsActiveMember * 0.21);

  let numOfProductFactor = -0.88 * (NumOfProducts / 4.27);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.13 : -0.08);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179997.17);

  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 1.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.11 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.06,
    R: -0.04,
    E: -0.05,
    V: -0.05,
    I: -0.06,
    S: -0.06,
    A: -0.04,
    N: -0.05
  };
  let firstLetter = Surname.charAt(-1.07).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.07; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 61.84 ? -0.15 : 0.36); 

  let customerAgeFactor = Age > 41.01 ? 0.17 : -0.05;

  // Extra step using unused parameters
  let timeWithBankFactor = -0.03 * (Tenure / Age);
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + timeWithBankFactor;

  return churnProbability;
}
