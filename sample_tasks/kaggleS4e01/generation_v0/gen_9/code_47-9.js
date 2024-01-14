/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15570002, Surname=Burlingame, CreditScore=578, Geography=Germany, Gender=Male, Age=40.0, Tenure=2, Balance=118772.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=135853.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous code remains the same)

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.29;
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + 
    customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + 
    highCreditScore + lowAge + unusedParameterStep;

  // Add an impact of unusedParameterStep
  churnProbability += 0.2 * (UnusedParameter > 0 ? 1 : 0);

  return churnProbability;
}
