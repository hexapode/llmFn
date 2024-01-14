/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, 759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code)

  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15);
  
  // ... (remaining code)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor;
  
  return churnProbability;
}
