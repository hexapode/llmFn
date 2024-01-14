/** // -Infinity //**/
/**
Try to think how CreditScore parameter could impact the prediction, then add a step in the computation using the parameter CreditScore. Here as some value it can take: 668, 627, 678, 581, 716, 588, 593, 678, 676, 583, 599, 687, 759, 681, 703, 549, 602, 636, 645, 559.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains the same)

  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9360.15);
  
  // Introducing the CreditScore factor
  let highCreditScoreFactor = CreditScore >= 700 ? 0.05 : 0.00;

  // ... (other factors remain the same)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + highCreditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;
  
  return churnProbability;
}
