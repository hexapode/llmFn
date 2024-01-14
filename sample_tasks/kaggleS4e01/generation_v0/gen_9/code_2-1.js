/** // 0.7279743920688339 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15638207, Surname=Onyemauchechukwu, CreditScore=599, Geography=France, Gender=Female, Age=40.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=167553.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let creditScoreFactor = -0.60 * (0.99 - CreditScore / 851.10);
  let ageFactor = 1.41 * (Age / 98.39);
  let balanceFactor = 0.08 * (Balance / 180001.96);
  let activeMemberFactor = 0.09 * (IsActiveMember ? -0.01 : 0.99);
  let tenureFactor = 0.05 * (Tenure / 9);

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor;

  return churnProbability;
}
