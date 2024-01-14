/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15603565, Surname=Nwankwo, CreditScore=604, Geography=Spain, Gender=Female, Age=24.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=70668.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Adding a step using the unused parameters
  let creditAgeRatio = CreditScore / Age;
  let creditAgeRatioFactor = creditAgeRatio > 25.00 ? 0.10 : -0.05;

  // Existing calculation steps
  let tenureFactor = -0.14 * (Tenure / 3.82);
  tenureFactor -= (Age / 101.06);
  // ... (rest of the calculation steps)

  // Final churn probability calculation including the new step
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + surnameLengthFactor + tenureNumOfProductFactor + geoFranceFactor + highCreditScore + lowAge + creditAgeRatioFactor;

  return churnProbability;
}
