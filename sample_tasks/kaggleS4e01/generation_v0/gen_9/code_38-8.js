/** // 0.6863210882331272 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15799384, Surname=White, CreditScore=730, Geography=France, Gender=Female, Age=29.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=131473.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = 0.75 * (CreditScore / 800 - 0.72);
  let ageFactor = 0.35 * (Age / 45 - 0.64) + (IsActiveMember === 1 ? 0.22 : 0);
  let tenureFactor = 0.12 * (Tenure / 10 - 1);
  let balanceFactor = 0.25 * (Balance / 200000 - 0.3) + (NumOfProducts === 2 ? 0.15 : 0);
  let geographyFactor = Geography === 'France' ? -0.1 : (Geography === 'Spain' ? 0.05 : 0.1);
  let estimatedSalaryFactor = 0.08 * (EstimatedSalary / 200000 - 0.3);
  let genderFactor = Gender === 'Female' ? 0.05 : -0.05;

  let churnProbability = creditScoreFactor + ageFactor + tenureFactor + balanceFactor + geographyFactor + estimatedSalaryFactor + genderFactor;
  
  return churnProbability;
}
