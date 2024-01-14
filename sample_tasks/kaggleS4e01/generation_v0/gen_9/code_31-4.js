/** // 0.8222638119387753 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15758775, Surname=Vasilyeva, CreditScore=642, Geography=Germany, Gender=Female, Age=30.0, Tenure=6, Balance=109941.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=75837.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let tenureFactor = -0.15 * Tenure / 2.82;
  let balanceFactor = -0.06 * Balance / 121004.07 + (NumOfProducts === 1 ? 0.04 : -0.17);
  let creditScoreFactor = 2.09 * (1.93 - CreditScore / 9360.34);
  let ageFactor = 3.06 * Age / 104.74 - (IsActiveMember * 0.11);
  let numOfProductFactor = -2.87 * NumOfProducts / 12.26 + (HasCrCard ? 0.09 : 0.00);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.17 : -0.10);
  let estimatedSalaryFactor = 0.02 * EstimatedSalary / 179994.83;
  let tenureNumOfProductFactor = 0.06 * (Tenure / NumOfProducts - 1.20) + (Age < 30.00 ? 0.06 : 0.00);
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor + tenureNumOfProductFactor;
  
  let genderFactor = Gender === 'Female' ? 0.14 : -0.05 + (Age > 28.90 ? 0.06 : 0.09);
  let geoFactor = Geography === 'Spain' ? 0.12 : (Geography === 'France' ? 0.11 : 0.10);
  let surnameFactor = Surname.length / 1000.00 + (NumOfProducts > 2.00 ? 0.22 : 0.00);
  let ageCreditScoreFactor = (Age > 50.00 ? 0.11 : 0.00) + (CreditScore < 700.00 ? -0.09 : 0.00);
  let customerIdFactor = (CustomerId % 7.00 === 0 ? 0.15 : 0.00) + (Age < 40.00 ? 0.08 : -0.03);
  let finalChurnProbability = churnProbability + genderFactor + geoFactor + surnameFactor + ageCreditScoreFactor + customerIdFactor;
  
  return finalChurnProbability;
}
