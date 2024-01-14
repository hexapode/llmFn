/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15753248, Surname=Tao, CreditScore=528, Geography=Germany, Gender=Male, Age=45.0, Tenure=2, Balance=108924.33, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=25395.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains the same)
  
  let novelCombinationFactor = ((Age * NumOfProducts) - (Balance / 1000)) / (CreditScore + 1);
  
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.29;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + novelCombinationFactor;

  return churnProbability;
}
