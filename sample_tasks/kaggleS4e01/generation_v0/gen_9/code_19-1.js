/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15736578, Surname=Brazenor, CreditScore=701, Geography=France, Gender=Male, Age=49.0, Tenure=1, Balance=106871.81, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=180598.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous factors calculation)

  // Balance to salary ratio factor
  let balanceToSalaryRatio = Balance / EstimatedSalary;
  let balanceToSalaryFactor = balanceToSalaryRatio > 1.5 ? 0.15 : (balanceToSalaryRatio > 1.0 ? 0.08 : -0.12);

  // ... (other factors and calculations)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + balanceToSalaryFactor;

  return churnProbability;
}
