/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15778897, Surname=Dellucci, CreditScore=632, Geography=France, Gender=Female, Age=38.0, Tenure=1, Balance=138207.08, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=63747.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous factors calculations)

  let balanceSalaryRatio = Balance / EstimatedSalary;
  let balanceSalaryFactor = -0.9 * (balanceSalaryRatio - 2.16) + (NumOfProducts === 1 ? 0.05 : 0) + (Age > 35 ? 0.07 : 0) + (HasCrCard ? 0.05 : 0);
  
  // ... (previous factors calculations)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + balanceSalaryFactor;

  return churnProbability;
}
