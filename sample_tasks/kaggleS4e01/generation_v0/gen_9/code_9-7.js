/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15782736, Surname=Ts'ao, CreditScore=661, Geography=France, Gender=Female, Age=41.0, Tenure=3, Balance=118327.64, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=86044.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (existing code)

  let tenureFactor = -0.05 * (Tenure / 10); 
  // ... (existing code)

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + -0.01 * customerIdFactor + surnameFactor;

  return churnProbability;
}
