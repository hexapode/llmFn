/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, CreditScore=759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Existing computation code

  let creditScoreImpact = (CreditScore - 550) / 1000; // Scaling the CreditScore to be between 0 and 1
  creditScoreImpact = creditScoreImpact > 0 ? creditScoreImpact : 0; // Ensuring the impact is non-negative

  let creditScoreFactor = 1 - creditScoreImpact; // Higher CreditScore reduces the churn probability

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor;

  return churnProbability;
}
