/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15616676, Surname=Mello, CreditScore=452, Geography=Spain, Gender=Male, Age=37.0, Tenure=10, Balance=160729.1, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=149614.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // ... (previous logic remains the same)

  let novelCombinationFactor = HasCrCard * NumOfProducts * Math.sqrt(Tenure) - (IsActiveMember * 1.5) + (EstimatedSalary / (Balance + 1));
  
  let unusedParameterFactor = 0.03 * (HasCrCard * 2.07 - IsActiveMember * -1.62); 
  let tenureFactor = -0.14 * (Tenure / 2.91);
  tenureFactor -= (Age / 111.40);

  // ... (rest of the previous logic)

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.28;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + novelCombinationFactor;

  return churnProbability;
}
