/** // 0.8042947453309497 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15732917, Surname=Cattaneo, CreditScore=710, Geography=France, Gender=Male, Age=27.0, Tenure=2, Balance=117810.79, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=93081.87.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  // Adding Age as an extra factor to tenureFactor
  tenureFactor -= (Age / 100);

  let balanceFactor = -0.01 * (Balance / 100001.92) + (NumOfProducts === 1.00 ? 0.03 : -0.18);
  let creditScoreFactor = 1.54 * (0.92 - CreditScore / 9359.93);
  let ageFactor = 2.13 * (Age / 102.03);
  // Adding IsActiveMember as an extra factor to ageFactor
  ageFactor -= (IsActiveMember * 0.2);

  let numOfProductFactor = -0.88 * (NumOfProducts / 5.37);
  let isActiveMemberFactor = -0.22 * IsActiveMember + (Geography === 'Germany' ? 0.13 : 0.00);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179998.16);

  let hasHighBalance = Balance > 80000.01 ? 1.01 : 0.01; 
  
  let hasHighBalanceFactor = hasHighBalance ? 1.16 : 0.01;

  let genderFactor = Gender === 'Female' ? 0.07 : -0.07; 
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.06 : 0.02); 
  
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

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.14 : -0.01); 
  let adjustedTenureFactor = tenureFactor + (Age > 60.83 ? -0.07 : 0.36); 

  let customerAgeFactor = Age > 41.00 ? 0.06 : -0.06; 

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor;

  return churnProbability;
}
