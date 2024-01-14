/** // -Infinity //**/
/**
Try to think how Gender parameter could impact the prediction, then add a step in the computation using the parameter Gender. Here as some value it can take: Male, Male, Male, Male, Male, Male, Female, Male, Male, Male, Female, Male, Male, Male, Female, Female, Male, Male, Female, Male.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // (Previous calculations remain the same)

  // Factor based on gender
  let genderFactor = Gender === 'Female' ? 0.14 : -0.06 + (Age > 28.90 ? 0.06 : 0.08);

  // (Remaining calculations remain the same)

  // Adjust churn probability with gender factor
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + ... // Include all other factors

  return churnProbability;
}
