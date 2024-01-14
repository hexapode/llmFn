/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15582914, Surname=Palerma, CreditScore=614, Geography=Germany, Gender=Male, Age=39.0, Tenure=8, Balance=135422.37, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=148814.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous factors remain the same)

  let balanceToSalaryRatio = Balance / EstimatedSalary;
  let balanceToSalaryFactor = 0.15 * (balanceToSalaryRatio / 3.0) - (NumOfProducts === 2.00 ? 0.04 : 0.00) + (Age < 30.00 ? 0.06 : 0.00);

  // ... (previous factor calculations remain the same)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + balanceToSalaryFactor;

  return churnProbability;
}
