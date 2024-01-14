/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15770101, Surname=Oguejiofor, CreditScore=574, Geography=Spain, Gender=Male, Age=39.0, Tenure=1, Balance=95128.86, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=126812.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (existing factors and calculations)

  let ageNumOfProductRatio =  Age / (NumOfProducts + 1.0);
  let ageNumOfProductFactor = 0.03 * (ageNumOfProductRatio - 25.0) + (NumOfProducts > 1.0 && Age < 40.0 ? 0.1 : 0.0);

  // Include the new factor in the final churn probability calculation
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + ageNumOfProductFactor +
    geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
