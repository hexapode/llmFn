/** // 0.5435551243795794 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15784526, Surname=Chia, CreditScore=581, Geography=France, Gender=Female, Age=34.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=27330.59.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
  // Reasoning:
  // We will use a novel combination of variables to calculate the churn probability. We will assign weights to each variable and then combine them linearly to get the churn probability.

  let creditScoreFactor = 0.35 * (0.99 - CreditScore / 1704.39); 
  let ageFactor = 2.67 * (Age / 99.17); 
  let balanceFactor = 0.17 * (Balance / 360002.20); 
  let activeMemberFactor = 0.19 * (IsActiveMember ? -0.01 : 0.99); 
  let tenureFactor = -0.05 * (Tenure / 21.10); 
  let numOfProductsFactor = -0.18 * (NumOfProducts - 0.00); 
  let hasCrCardFactor = -0.05 * (HasCrCard ? 0.00 : 1.00); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200002.01);
  let genderFactor = Gender === 'Female' ? 0.16 : 0.00;
  let geographyFactor = Geography === 'France' ? -0.06 : 0.04;
  
  let novelFactor = CreditScore * Age / (Balance + 1) * (HasCrCard ? 1 : 0.5);
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + (novelFactor / 1000000);

  return churnProbability;
}
