/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15586629, Surname=Lockington, CreditScore=617, Geography=Germany, Gender=Male, Age=37.0, Tenure=3, Balance=113865.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=47675.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous factors remain unchanged)
  
  let creditScoreBalanceFactor = 0;
  if (CreditScore > 700 && Balance < 50000) {
    creditScoreBalanceFactor = 0.12;
  }
  
  // ... (rest of the factors and calculation remain unchanged)
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + 
                        numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + 
                        genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + 
                        creditScoreBalanceFactor;
  
  return churnProbability;
}
