/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15716984, Surname=Palermo, CreditScore=695, Geography=Spain, Gender=Female, Age=56.0, Tenure=5, Balance=0.0, NumOfProducts=3, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=85185.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous factors remain the same)

  let balanceNumOfProductRatio = Balance / NumOfProducts;
  let balanceNumOfProductFactor = 0.05 * (balanceNumOfProductRatio - 35000); // Adjusted based on sample input

  // ... (other factors remain the same)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + balanceNumOfProductFactor; // Include balanceNumOfProductFactor

  return churnProbability;
}
