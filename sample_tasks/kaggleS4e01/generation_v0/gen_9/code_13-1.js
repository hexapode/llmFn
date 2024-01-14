/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15723004, Surname=K?, CreditScore=696, Geography=Germany, Gender=Male, Age=40.0, Tenure=9, Balance=88827.53, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=148611.52.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.00 * (Balance / 100001.92) + (NumOfProducts === 1.00 ? 0.03 : -0.09);
  let creditScoreFactor = 1.44 * (0.92 - CreditScore / 9361.02);
  let ageFactor = 0.02 * (Age / 100.92) + (Age > 40 ? 0.02 : 0.0);
  let numOfProductFactor = -0.89 * (NumOfProducts / 6.26);
  let isActiveMemberFactor = -0.21 * IsActiveMember + (Geography === 'Germany' ? 0.12 : 0.01);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.05) - (EstimatedSalary > 100000 ? 0.01 : 0.0);

  let hasHighBalance = Balance > 80000.01 ? 1 : 0; 
  let hasHighBalanceFactor = hasHighBalance ? 0.2 : 0.0;

  let genderFactor = Gender === 'Female' ? 0.07 : -0.06; 
  let geographyFactor = Geography === 'France' ? -0.08 : (Geography === 'Spain' ? -0.06 : 0.00); 
  
  let surnameFactors = {
    K: -0.04,
    ?: -0.05
  };
  let firstLetter = Surname.charAt(0).toUpperCase();
  let surnameFactor = surnameFactors[firstLetter] || -0.08; 

  let combinedIsActiveMemberFactor = isActiveMemberFactor + (HasCrCard ? 0.07 : -0.01); 
  let adjustedTenureFactor = tenureFactor + (Age > 59.83 ? -0.08 : 0.27); 
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor; 

  return churnProbability;
}
