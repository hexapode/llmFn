/** // 0.7953331918782846 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15659568, Surname=Su, CreditScore=812, Geography=France, Gender=Female, Age=25.0, Tenure=4, Balance=54817.55, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=131660.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let tenureFactor = -0.14 * (Tenure / 3.03) - (Age / 136.14);
  let balanceFactor = -0.06 * (Balance / 146417.56) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (CustomerId === 15802487.00 ? 0.08 : 0.00);
  let creditScoreFactor = 0.10 * (1.93 - CreditScore / 1872.34);
  let ageFactor = 3.22 * (Age / 103.50) - (CreditScore / 5002.11);
  let numOfProductFactor = -3.43 * (NumOfProducts / 10.00) + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.21 : -0.11);
  let estimatedSalaryFactor = 0.00 * (EstimatedSalary / 179993.91);
  let genderFactor = Gender === 'Female' ? 0.15 : -0.07 + (Age > 31.89 ? 0.06 : 0.08) + (CustomerId === 15573851.00 ? 0.15 : 0.00);
  let geographyFactor = Geography === 'France' ? -0.04 : (Geography === 'Spain' ? -0.04 : 0.02) + (CreditScore > 701.00 ? 0.02 : 0.00);
  
  let customerAgeFactor = Age > 42.01 ? 0.25 : 0.09 + (NumOfProducts === 2.00 ? 0.06 : 0.00);
  let highCreditScore = CreditScore > 797.90 ? 0.18 : 0.13;
  let lowAge = Age < 57.00 ? 0.14 : -0.12;

  let hasHighBalance = Balance > 80000.02 ? 1.02 : 0.02;
  let hasHighBalanceFactor = hasHighBalance ? 2.17 : 0.02;

  let unusedParameterFactor = 0.09 * (HasCrCard * 2.80 - IsActiveMember * -2.16) + (CreditScore > 699.00 ? 0.00 : 0.01);
  let unusedParameterStep = unusedParameterFactor * tenureFactor * Balance / 99998.30;

  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + 
    ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + 
    genderFactor + geographyFactor + customerAgeFactor + highCreditScore + 
    lowAge + hasHighBalanceFactor + unusedParameterStep;

  return churnProbability;
}
