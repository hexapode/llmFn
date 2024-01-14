/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15682628, Surname=Chia, CreditScore=615, Geography=Germany, Gender=Female, Age=40.0, Tenure=2, Balance=127523.06, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=136797.15.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code remains the same)
  
  let ageNumOfProductsInteractionFactor = 0.05 * (Age / 100) * (NumOfProducts / 4);

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + ageNumOfProductsInteractionFactor;

  return churnProbability;
}
