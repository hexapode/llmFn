/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15671522, Surname=Efimov, CreditScore=613, Geography=France, Gender=Male, Age=40.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=146880.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (existing code remains the same)

  let novelCombinationFactor = (Age * Balance) / (CreditScore + 1);
  
  let tenureFactor = -0.02 * (Tenure / 5.13);
  tenureFactor -= (Age / 102.03);

  let balanceFactor = -0.02 * (Balance / 121002.20) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let creditScoreFactor = 2.03 * (0.93 - CreditScore / 9361.16);
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);

  // ... (rest of the existing code)

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor + novelCombinationFactor;

  return churnProbability;
}
