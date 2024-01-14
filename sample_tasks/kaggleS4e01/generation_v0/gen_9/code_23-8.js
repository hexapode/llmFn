/** // 0.7931063654413573 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15641585, Surname=Lucchese, CreditScore=559, Geography=France, Gender=Male, Age=37.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=179866.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let ageFactor = 3.04 * (Age / 100.85);
  ageFactor -= (IsActiveMember * 0.22);
  
  let isActiveMemberFactor = -0.11 * IsActiveMember + (Geography === 'Germany' ? 0.14 : -0.09);
  let tenureFactor = -0.02 * (Tenure / 5.04) + (NumOfProducts === 1.01 ? 0.04 : -0.17) + (HasCrCard ? 0.15 : 0.00);
  
  let creditScoreFactor = 2.13 * (0.93 - CreditScore / 9360.15) + (Geography === 'Spain' ? 0.05 : (Geography === 'Germany' ? 0.08 : -0.03));
  
  let balanceFactor = -0.02 * (Balance / 121003.09);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179995.85);
  
  let churnProbability = ageFactor + isActiveMemberFactor + tenureFactor + creditScoreFactor + balanceFactor + estimatedSalaryFactor;
  
  return churnProbability;
}
