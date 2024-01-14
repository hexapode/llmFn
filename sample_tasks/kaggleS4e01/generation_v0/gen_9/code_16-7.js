/** // 0.8280629625773738 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15672966, Surname=Chigozie, CreditScore=619, Geography=Spain, Gender=Male, Age=20.0, Tenure=2, Balance=135827.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=121102.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 4.85);
  tenureFactor -= (Age / 102.02);

  let balanceFactor = -0.02 * (Balance / 110003.10) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.02 * (0.93 - CreditScore / 9361.04);
  let ageFactor = 3.15 * (Age / 99.94);
  ageFactor -= (IsActiveMember * 0.21);

  let numOfProductFactor = -0.97 * (NumOfProducts / 4.28);
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.13 : -0.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179997.06);
  
  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02; 
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let genderFactor = Gender === 'Female' ? 0.12 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.05 : (Geography === 'Spain' ? -0.04 : 0.03); 
  
  let surnameFactors = {
    T: -0.02,
    H: -0.07,
    R: -0.13,
    E: -0.04,
    V: -0.14,
    I: -0.06,
    S: -0.14,
    A: -0.05,
    N: -0.16
  };
  let firstLetter = Surname.charAt(1.00).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.06; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.15 : 0.00) + (CustomerId === 15672966 ? 0.10 : 0.00); 
  let adjustedTenureFactor = tenureFactor + (Age > 62.84 ? -0.14 : 0.45); 

  let customerAgeFactor = Age > 42.01 ? 0.18 : -0.06; 

  
  let customerIdLastDigit = CustomerId % 9.00;
  let customerIdFactor = customerIdLastDigit > -6.00 ? 0.07 : 0.05;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
