/** // 0.7828625751156254 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15768163, Surname=Monaldo, CreditScore=623, Geography=Germany, Gender=Female, Age=37.0, Tenure=7, Balance=124053.03, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=118591.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Reasoning:
  // We will calculate the churn probability based on various input parameters, by assigning different weights to each parameter and combining them to get the final probability.

  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99);
  
  let creditScoreFactor = 0.38 * (0.98 - CreditScore / 1706.37); 
  let ageFactor = 2.87 * (Age / 106.78); 
  let balanceFactor = -0.01 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.06 * (Tenure / 18.89); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - -0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.21);

  let genderFactor = Gender === 'Female' ? 0.16 : 0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : (Geography === 'Spain' ? -0.05 : 0.15);

  let novelCombinationFactor = Math.sqrt(Age * Balance) / 10000; // Novel combination of Age and Balance
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + novelCombinationFactor;

  return churnProbability;
}
