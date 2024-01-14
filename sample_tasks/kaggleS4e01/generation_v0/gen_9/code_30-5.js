/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15753861, Surname=Nnachetam, CreditScore=711, Geography=Spain, Gender=Female, Age=40.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=90876.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Existing factors and calculations
  
  let ageNumOfProductRatio = Age / NumOfProducts;
  let ageNumOfProductFactor = 0.06 * (ageNumOfProductRatio - 1.20) + (Age < 30.10 ? 0.05 : 0.00);

  // Rest of the existing factors and calculations

  // Final churn probability calculation including the new factor
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterFactor + ageNumOfProductFactor;

  return churnProbability;
}
