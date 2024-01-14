/** // 0.6342662612163691 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15604494, Surname=Folliero, CreditScore=850, Geography=France, Gender=Male, Age=36.0, Tenure=5, Balance=102284.69, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=142467.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = 0.025 * (CreditScore / 850);
  let ageFactor = 0.03 * (Age / 100);
  let balanceFactor = 0.015 * (Balance / 100000);
  let tenureFactor = -0.02 * (Tenure / 10);
  let geographyFactor = Geography === 'Germany' ? 0.05 : (Geography === 'Spain' ? 0.02 : -0.02);
  let isActiveMemberFactor = IsActiveMember === 1 ? -0.03 : 0.03;
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 150000);
  let hasCrCardFactor = HasCrCard === 1 ? 0.02 : 0;
  let numOfProductsFactor = NumOfProducts === 1 ? 0 : -0.02;

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + tenureFactor + geographyFactor + isActiveMemberFactor + estimatedSalaryFactor + hasCrCardFactor + numOfProductsFactor;

  return churnProbability;
}
