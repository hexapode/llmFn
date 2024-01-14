/** // 0.8226565925797004 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15679663, Surname=Ch'ien, CreditScore=731, Geography=Germany, Gender=Male, Age=38.0, Tenure=4, Balance=118520.92, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=74858.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.00 * (Balance / 100001.92) + (NumOfProducts === 1.00 ? 0.03 : -0.09) + (HasCrCard ? 0.05 : 0);
  let creditScoreFactor = 1.44 * (0.92 - CreditScore / 9361.02) - (Geography === 'Germany' ? 0.02 : 0);
  let ageFactor = 2.24 * (Age / 100.92);
  let numOfProductFactor = -0.89 * (NumOfProducts / 6.26);
  let isActiveMemberFactor = -0.21 * IsActiveMember + (Geography === 'Germany' ? 0.12 : 0.01);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.05) + (Balance > 100000 ? 0.03 : 0);

  let hasHighBalance = Balance > 80000.01 ? 1.01 : 0.01; 
  
  let hasHighBalanceFactor = hasHighBalance ? 1.16 : 0.01;

  let genderFactor = Gender === 'Female' ? 0.07 : -0.06; 
  let geographyFactor = Geography === 'France' ? -0.08 : (Geography === 'Spain' ? -0.06 : 0.00); 
  
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
  let adjustedTenureFactor = tenureFactor + (Age > 59.83 ? -0.08 : 0.27); 
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor; 

  return churnProbability;
}
