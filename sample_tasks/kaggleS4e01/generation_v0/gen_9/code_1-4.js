/** // 0.421637148031788 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15592479, Surname=Lucchese, CreditScore=644, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162865.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;

  
  let creditScoreFactor = (850 - CreditScore) / 850;

  
  let balanceFactor = Balance / 10000;

  
  let productsFactor = 1 - (NumOfProducts / 10);

  
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  
  let creditBalanceRatio = CreditScore / Balance;

  
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor + creditBalanceRatio) / 6;

  return churnProbability;
}
