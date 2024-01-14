/** // 0.5849940286885359 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15730360, Surname=K?, CreditScore=699, Geography=France, Gender=Male, Age=34.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55796.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let tenureFactor = 0.1 * Tenure - 0.05 * Age;
  let balanceFactor = 0.05 * Balance - 0.2 * NumOfProducts;
  let creditScoreFactor = 0.002 * CreditScore - 1.5;
  let ageFactor = 0.02 * Age - 0.08;
  let numOfProductFactor = -0.3 * NumOfProducts + 0.1 * HasCrCard;
  let isActiveMemberFactor = -0.06 * IsActiveMember + 0.1;
  let estimatedSalaryFactor = 0.0001 * EstimatedSalary + 0.02;
  
  let churnProbability = tenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + isActiveMemberFactor + estimatedSalaryFactor;
  
  return churnProbability;
}
