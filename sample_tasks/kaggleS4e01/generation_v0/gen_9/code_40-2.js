/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15669414, Surname=Pisano, CreditScore=486, Geography=Germany, Gender=Female, Age=62.0, Tenure=9, Balance=118356.89, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=168034.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // Existing factors
  // ...
  
  // New factor: Relationship between credit score and estimated salary
  let creditScoreSalaryRatio = CreditScore / EstimatedSalary;
  let creditScoreSalaryFactor = creditScoreSalaryRatio > 0.0025 ? 0.05 : -0.03;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep + creditScoreSalaryFactor; // Include new factor

  return churnProbability;
}
