/** // 0.5958803436910455 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15587562, Surname=Ts'ai, CreditScore=719, Geography=France, Gender=Male, Age=37.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=74838.64.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Use the absolute difference between the average CreditScore and the given CreditScore
  let creditScoreDifference = Math.abs(CreditScore - 719); 

  // Novel combination of variable: Use the product of Age and Tenure as a new factor
  let ageTenureProduct = Age * Tenure;

  let averageCustomerId = 15674933.00; 
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679805.09 - 15566541.99); 
  
  let creditScoreFactor = 0.37 * (0.98 - creditScoreDifference / 1705.38); 
  let ageFactor = 2.78 * (Age / 98.06); 
  let balanceFactor = 0.16 * (Balance / 360002.19); 
  let activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.06 * (Tenure / 18.98); 
  let numOfProductsFactor = -0.19 * (NumOfProducts - -0.01); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 220001.11);

  let genderFactor = Gender === 'Female' ? 0.15 : -0.01;
  let geographyFactor = Geography === 'France' ? -0.07 : 0.04;
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + 0.02 * ageTenureProduct; 

  return churnProbability;
}
