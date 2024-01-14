/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15595599, Surname=Nwebube, CreditScore=543, Geography=Germany, Gender=Male, Age=33.0, Tenure=1, Balance=82447.94, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=93549.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Reasoning:
  // We calculate various factors based on the input variables, such as credit score, age, balance, tenure, etc.
  // We also consider additional factors such as the first letter of the surname and the last digit of the customer ID.
  // These factors are then combined to calculate the churn probability.

  let tenureFactor = -0.02 * (Tenure / 5.13);
  tenureFactor -= (Age / 102.03);

  //... (other factors remain the same)

  let novelCombinedFactor = (Age * Balance) / (CreditScore + 1);
  
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + novelCombinedFactor;
  
  return churnProbability;
}
