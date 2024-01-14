/** // 0.4957357817351683 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15798895, Surname=Ogochukwu, CreditScore=758, Geography=Germany, Gender=Female, Age=47.0, Tenure=4, Balance=117469.94, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=129975.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  let creditScoreFactor = 0.31 * (0.98 - CreditScore / 1704.38); 
  let ageFactor = 2.41 * (Age / 98.27); 
  let balanceFactor = 0.16 * (Balance / 360002.10); 
  let activeMemberFactor = 0.08 * (IsActiveMember ? -0.02 : 0.98); 
  let tenureFactor = -0.05 * (Tenure / 22.20); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - 0.99); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200001.00);
  
  // Novel combination of variables
  let novelFactor = (CreditScore * 0.15) + (Age * 0.1) - (Balance * 0.02) + (EstimatedSalary * 0.12) - (NumOfProducts * 0.08);

  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + novelFactor;

  return churnProbability;
}
