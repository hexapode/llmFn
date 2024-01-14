/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, 759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous computation steps)

  let creditScoreImpact = 0;
  if (CreditScore < 600) {
    creditScoreImpact = -0.05;
  } else if (CreditScore >= 600 && CreditScore < 700) {
    creditScoreImpact = 0.03;
  } else {
    creditScoreImpact = 0.08;
  }

  // ... (remaining computation steps)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + creditScoreImpact;
  
  return churnProbability;
}
