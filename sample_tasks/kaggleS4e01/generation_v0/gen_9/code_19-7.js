/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15629133, Surname=Black, CreditScore=579, Geography=France, Gender=Male, Age=27.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=126838.7.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Previous calculation code...

  let hasCrCardFactor = HasCrCard === 1.0 ? 0.08 : -0.05;
  let geographyFactor = Geography === 'Germany' ? 0.12 : (Geography === 'Spain' ? 0.06 : -0.08);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + hasCrCardFactor;

  return churnProbability;
}
