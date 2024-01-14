/** // 0.5494966313370074 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15775104, Surname=Shao, CreditScore=850, Geography=France, Gender=Female, Age=34.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=112333.22.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let ageFactor = Age / 100;
  let creditScoreFactor = (850 - CreditScore) / 850;
  let balanceFactor = Balance / 10000;
  let productsFactor = 1 - (NumOfProducts / 10);
  let tenureFactor = Tenure / 10; // Using tenure as a factor
  let activeMemberFactor = IsActiveMember ? 0.2 : 1;

  let churnProbability = (ageFactor + creditScoreFactor + balanceFactor + productsFactor + tenureFactor + activeMemberFactor) / 6;

  return churnProbability;
}
