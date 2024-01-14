/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15693764, Surname=Ch'ang, CreditScore=731, Geography=Spain, Gender=Female, Age=50.0, Tenure=0, Balance=153962.88, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=103570.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous logic)

  let hasCrCardFactor = HasCrCard ? 0.1 : -0.15;
  let tenureBalanceRatio = Tenure === 0 ? 1 : Balance / Tenure;

  let tenureBalanceRatioFactor = tenureBalanceRatio > 100000.00 ? 0.05 : -0.03;

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + hasCrCardFactor + tenureBalanceRatioFactor;

  return churnProbability;
}
