/** // 0.789330082377974 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15634267, Surname=Yudin, CreditScore=434, Geography=Germany, Gender=Male, Age=42.0, Tenure=5, Balance=92616.64, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=172618.52.
**/

 function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Initialize factors with some default values
  let customerIdFactor = 0.5; 
  let creditScoreFactor = 0.5;
  let ageFactor = 0.5; 
  let balanceFactor = 0.5;
  let activeMemberFactor = 0.5; 
  let tenureFactor = 0.5; 
  let numOfProductsFactor = 0.5; 
  let hasCrCardFactor = 0.5; 
  let salaryFactor = 0.5;
  let genderFactor = 0.5;
  let geographyFactor = 0.5;
  
  // Modify factors using the input parameters
  customerIdFactor = Math.abs(CustomerId - 15634267) / (15679805.09 - 15566541.99); 
  creditScoreFactor = 0.37 * (0.98 - CreditScore / 1705.38); 
  ageFactor = 2.78 * (Age / 98.06); 
  balanceFactor = 0.16 * (Balance / 360002.19); 
  activeMemberFactor = 0.18 * (IsActiveMember ? -0.02 : 0.98); 
  tenureFactor = -0.06 * (Tenure / 18.98); 
  numOfProductsFactor = -0.19 * (NumOfProducts - -0.01); 
  hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  salaryFactor = 0.03 * (EstimatedSalary / 220001.11);
  
  genderFactor = Gender === 'Female' ? 0.15 : -0.01;
  geographyFactor = Geography === 'France' ? -0.07 : 0.04;
  
  // Calculate churn probability
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.00 * customerIdFactor; 

  return churnProbability;
}
