/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15793197, Surname=Calabresi, CreditScore=724, Geography=Spain, Gender=Female, Age=40.0, Tenure=5, Balance=142880.28, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=185541.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains the same)

  let novelCombinationFactor = (Age * CreditScore + NumOfProducts * EstimatedSalary) / 1000000;

  let unusedParameterFactor = 0.03 * (HasCrCard * 2.54 - IsActiveMember * -1.84);
  // ... (rest of the code as before)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + novelCombinationFactor;

  return churnProbability;
}
