/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15797960, Surname=Tien, CreditScore=743, Geography=Germany, Gender=Female, Age=41.0, Tenure=9, Balance=102945.01, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=180318.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... existing code ...

  // Novel combination of variable
  let tenureCreditRatio = (Tenure / 5.22) / (CreditScore / 9360.15);
  let tenureCreditRatioFactor = tenureCreditRatio > 0.5 ? 0.08 : -0.06;

  // ... existing code ...

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + tenureCreditRatioFactor;

  return churnProbability;
}
