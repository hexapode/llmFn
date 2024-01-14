/** // 0.7240689479494633 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15694566, Surname=Vachon, CreditScore=850, Geography=Germany, Gender=Female, Age=31.0, Tenure=1, Balance=164672.66, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=61936.1.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

  let ageFactor = 3.07 * (Age / 104.84);
  let creditScoreFactor = 2.08 * (1.93 - CreditScore / 9359.34);
  let balanceFactor = -0.06 * (Balance / 121005.17) + (NumOfProducts === 1.01 ? 0.04 : -0.17);
  let isActiveMemberFactor = -0.09 * IsActiveMember + (Geography === 'Germany' ? 0.18 : -0.10);
  let estimatedSalaryFactor = 0.02 * (EstimatedSalary / 179994.83);
  let tenureNumOfProductRatio = Tenure / NumOfProducts;
  let tenureNumOfProductFactor = 0.06 * (tenureNumOfProductRatio - 1.20) + (Age < 30.00 ? 0.06 : 0.00);
  let genderFactor = Gender === 'Female' ? 0.14 : -0.05 + (Age > 28.90 ? 0.06 : 0.08);
  let highBalanceFactor = Balance > 80000.02 ? 1.02 : 0.02;

  let ageCreditScoreRatio = Age / (CreditScore + 1);
  let ageCreditScoreFactor = 2.73 * (ageCreditScoreRatio - 0.04);

  let churnProbability = ageFactor + creditScoreFactor + balanceFactor + isActiveMemberFactor + estimatedSalaryFactor + tenureNumOfProductFactor + genderFactor + highBalanceFactor + ageCreditScoreFactor;

  return churnProbability;
} 
PredictExited(15694566, 'Vachon', 850, 'Germany', 'Female', 31.0, 1, 164672.66, 1, 0.0, 0.0, 61936.1);
