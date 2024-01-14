/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15641732, Surname=Tuan, CreditScore=629, Geography=France, Gender=Male, Age=36.0, Tenure=1, Balance=106918.73, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=147815.92.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculation steps remain the same)

  // Combining age and credit score to create a novel variable
  let ageCreditScoreRatio = Age / CreditScore;
  let ageCreditScoreVariable = ageCreditScoreRatio * 0.15;

  // Include the novel variable in the churn probability calculation
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + ageCreditScoreVariable;

  return churnProbability;
}
