/** // 0.6896474567411459 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15687959, Surname=Ch'iu, CreditScore=739, Geography=Germany, Gender=Male, Age=28.0, Tenure=8, Balance=86915.41, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173425.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let creditScoreFactor = 0.31 * (1.93 - CreditScore / 1870.53);
  let ageFactor = 3.34 * (Age / 102.38) - (CreditScore / 5000.10);
  let balanceFactor = -0.07 * (Balance / 146417.46) + (NumOfProducts === 2.00 ? 0.04 : -0.17) + (CustomerId === 15809585.00 ? 0.08 : 0.00) - (CreditScore < -601.10 ? 0.03 : 0.01);
  let tenureFactor = -0.14 * (Tenure / 3.02) - (Age / 136.36) + (NumOfProducts === 2.00 ? 0.03 : 0.00);
  let estimatedSalaryFactor = 0.05 * (EstimatedSalary / 179992.90);
  let newVariable = Balance / 150000; // Introducing a new variable based on Balance

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + tenureFactor + estimatedSalaryFactor + newVariable; // Including newVariable in the churnProbability calculation

  return churnProbability;
}
