/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15743076, Surname=Pai, CreditScore=669, Geography=Spain, Gender=Male, Age=25.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=93901.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  // ... (previous logic stays the same)

  // Adding a novel combination of variables
  let novelCombinedFactor = (Age / 10) * (CreditScore / 10000) * (NumOfProducts / 4) * (Balance / 100000) * (EstimatedSalary / 100000);

  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99997.29;
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + unusedParameterStep + novelCombinedFactor;

  return churnProbability;
}
