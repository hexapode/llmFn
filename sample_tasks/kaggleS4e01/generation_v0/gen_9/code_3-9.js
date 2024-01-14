/** // 0.7752691599060269 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15709861, Surname=Yermakova, CreditScore=577, Geography=Spain, Gender=Female, Age=39.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=125961.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let creditScoreFactor = 0.31 * (0.98 - CreditScore / 1704.38); 
  let ageFactor = 2.41 * (Age / 98.27); 
  let balanceFactor = 0.16 * (Balance / 360002.10); 
  let activeMemberFactor = 0.08 * (IsActiveMember ? -0.02 : 0.98); 
  let novelFactor = 0.05 * (CreditScore * Age / 10000); // Novel combination of CreditScore and Age
  
  let tenureFactor = -0.05 * (Tenure / 22.20); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - 0.99); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200001.00);
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + novelFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor;

  return churnProbability;
}
