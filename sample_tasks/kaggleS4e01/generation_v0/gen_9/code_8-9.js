/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15809837, Surname=Nucci, CreditScore=599, Geography=Germany, Gender=Female, Age=40.0, Tenure=4, Balance=141573.55, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=167723.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous factors calculation)

  let balanceToSalaryRatio = 0.21 * (Balance / EstimatedSalary);

  // ... (rest of the factors calculation)

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor + surnameFactor + balanceToSalaryRatio;

  return churnProbability;
}
