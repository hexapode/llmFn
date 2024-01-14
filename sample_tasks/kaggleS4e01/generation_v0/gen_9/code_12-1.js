/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15723886, Surname=Hsia, CreditScore=644, Geography=Spain, Gender=Female, Age=30.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=148887.69.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // A novel combination of variables
  let creditScoreAgeRatio = CreditScore / Age;

  // Previous calculation logic
  let tenureFactor = -0.02 * (Tenure / 6.84);
  let balanceFactor = 0.04 * (Balance / 100000.93);
  let creditScoreFactor = 1.45 * (0.92 - CreditScore / 9361.02);
  let ageFactor = 2.33 * (Age / 99.91);
  let numOfProductFactor = -0.90 * (NumOfProducts / 6.15);
  let isActiveMemberFactor = -0.21 * IsActiveMember;
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179999.04);
  let creditScoreAgeRatioFactor = -0.1 * (creditScoreAgeRatio / 20);

  // Rest of the calculation
  // ...

  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + creditScoreAgeRatioFactor;

  return churnProbability;
}
