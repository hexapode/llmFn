/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15763171, Surname=Manna, CreditScore=667, Geography=Germany, Gender=Female, Age=33.0, Tenure=9, Balance=124577.15, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=77330.35.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // existing code...

  let creditScoreAgeRatio = (CreditScore / Age) * 1000;
  let creditScoreAgeRatioFactor = 0.005 * creditScoreAgeRatio;

  // other existing code...

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoGermanyFactor + highCreditScore + lowAge + creditScoreAgeRatioFactor;

  return churnProbability;
}
