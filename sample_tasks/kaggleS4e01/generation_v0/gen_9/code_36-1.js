/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15654901, Surname=Nwankwo, CreditScore=556, Geography=France, Gender=Male, Age=45.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=131953.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // ... (previous calculations)

  let novelCombinationFactor = (CreditScore * Math.abs(Age - 40)) / (Math.sqrt(NumOfProducts + 1) * (1 + IsActiveMember));
  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.28;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + novelCombinationFactor;

  return churnProbability;
}
