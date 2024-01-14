/** // 0.555260729740856 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15619130, Surname=Simpson, CreditScore=752, Geography=France, Gender=Female, Age=52.0, Tenure=5, Balance=113291.05, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=132436.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let ageFactor = Age / 100;

  
  let creditScoreFactor = (850 - CreditScore) / 850;

  
  let balanceFactor = Balance / 10000;

  
  let productsFactor = 1 - (NumOfProducts / 10);
  
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  
  let salaryFactor = EstimatedSalary / 200000;

  
  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + activeMemberFactor - salaryFactor) / 5;

  return churnProbability;
}
