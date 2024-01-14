/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15770091, Surname=Trevisano, CreditScore=579, Geography=Spain, Gender=Female, Age=28.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=10072.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Existing factors...
  
  // New factor based on the ratio of tenure to the number of products
  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.06 : 0.00);

  // Combine all factors to compute the churn probability
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
