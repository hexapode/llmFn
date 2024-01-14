/** // 0.7141650416680051 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15692926, Surname=Tikhonov, CreditScore=681, Geography=Spain, Gender=Male, Age=32.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=101138.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Assuming that the combination of certain features might have an impact on the churn probability
  let featureCombinationFactor = (Age * CreditScore) / 100000;
  
  let isInactiveNonCrCardHolder = (1 - IsActiveMember) * (1 - HasCrCard) * 0.05;
  let tenureCreditScoreRatio = (Tenure / CreditScore) * 0.03;

  // Calculating the churn probability based on the combination of factors
  let churnProbability = featureCombinationFactor + isInactiveNonCrCardHolder + tenureCreditScoreRatio;

  return churnProbability;
}
