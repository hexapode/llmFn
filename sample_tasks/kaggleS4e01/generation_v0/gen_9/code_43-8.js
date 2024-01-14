/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15693337, Surname=Perry, CreditScore=587, Geography=Spain, Gender=Male, Age=46.0, Tenure=0, Balance=148863.17, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=163911.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (existing code remains unchanged)

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.29;
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  return churnProbability;
}
