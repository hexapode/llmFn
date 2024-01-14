/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15788775, Surname=Milne, CreditScore=473, Geography=Germany, Gender=Male, Age=40.0, Tenure=8, Balance=152576.25, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=73073.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (existing code)

  let novelCombinationFactor = (Balance / (Age * NumOfProducts)) - (CreditScore / Tenure);

  // ... (existing code)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + novelCombinationFactor;
  
  return churnProbability;
}
