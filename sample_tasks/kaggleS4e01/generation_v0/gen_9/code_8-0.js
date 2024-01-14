/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, 759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code)

  let creditScoreImpact = 0;
  if (CreditScore >= 600 && CreditScore <= 700) {
    creditScoreImpact = 0.05;
  } else if (CreditScore > 700) {
    creditScoreImpact = 0.1;
  } else {
    creditScoreImpact = -0.05;
  }

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor + creditScoreImpact;

  return churnProbability;
}
