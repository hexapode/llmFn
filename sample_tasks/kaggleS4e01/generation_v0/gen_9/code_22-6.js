/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, 759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculation steps)

  let creditScoreNormalized = Math.max(0, Math.min(1, (CreditScore - 500) / 300));
  let creditScoreImpact = 0.5 * creditScoreNormalized; // Assuming a linear relationship

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + creditScoreImpact + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor;

  return churnProbability;
}
