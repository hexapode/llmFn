/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15693732, Surname=Ferri, CreditScore=674, Geography=Germany, Gender=Male, Age=56.0, Tenure=4, Balance=94231.13, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=121175.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ...[previous implementation]

  let hasCrCardFactor = HasCrCard ? 0.05 : -0.03;

  // ...[rest of the implementation]

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoFranceFactor + highCreditScore + lowAge + hasCrCardFactor;

  return churnProbability;
}
