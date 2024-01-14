/** // 0.7781802904064972 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15662494, Surname=Aiken, CreditScore=749, Geography=France, Gender=Female, Age=42.0, Tenure=5, Balance=144852.06, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=116781.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Reasoning:
  // CreditScore, Age, Balance, IsActiveMember, and EstimatedSalary are considered as the main influencing factors for churning probability based on previous statistical analysis.

  let creditScoreFactor = 0.35 * (0.99 - CreditScore / 1704.39); 
  let ageFactor = 2.67 * (Age / 99.17); 
  let balanceFactor = 0.17 * (Balance / 360002.20); 
  let activeMemberFactor = 0.19 * (IsActiveMember ? -0.01 : 0.99);
  
  // Introducing a new variable "loyaltyFactor" based on tenure and number of products.
  let tenureFactor = -0.05 * (Tenure / 21.10); 
  let numOfProductsFactor = -0.18 * (NumOfProducts - 0.00); 
  let loyaltyFactor = 0.15 * (tenureFactor + numOfProductsFactor); // New variable
  
  let hasCrCardFactor = -0.05 * (HasCrCard ? 0.00 : 1.00); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200002.01);
  let genderFactor = Gender === 'Female' ? 0.16 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.06 : 0.04;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + loyaltyFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor;

  return churnProbability;
}
