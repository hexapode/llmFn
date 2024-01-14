/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15746986, Surname=Teng, CreditScore=597, Geography=France, Gender=Male, Age=33.0, Tenure=4, Balance=165526.71, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=133535.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (existing code)

  let balanceToSalaryRatio = Balance / EstimatedSalary;

  let balanceToSalaryFactor = -0.05 * balanceToSalaryRatio + (NumOfProducts === 1 ? 0.04 : -0.17);

  // ... (existing code)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + balanceToSalaryFactor;
  
  return churnProbability;
}
