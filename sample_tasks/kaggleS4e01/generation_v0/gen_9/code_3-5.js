/** // 0.6792913135557659 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // Calculate hash value of CustomerId
  let hash = 0;
  for (let i = 0; i < CustomerId.length; i++) {
    let char = CustomerId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  let creditScoreFactor = 0.31 * (0.98 - CreditScore / 1704.38); 
  let ageFactor = 2.41 * (Age / 98.27); 
  let balanceFactor = 0.16 * (Balance / 360002.10); 
  let activeMemberFactor = 0.08 * (IsActiveMember ? -0.02 : 0.98); 
  
  let tenureFactor = -0.05 * (Tenure / 22.20); 
  let numOfProductsFactor = -0.20 * (NumOfProducts - 0.99); 
  let hasCrCardFactor = -0.06 * (HasCrCard ? -0.01 : 0.99); 
  let salaryFactor = 0.03 * (EstimatedSalary / 200001.00);
  
  // Incorporate hash value into churn probability calculation
  let churnProbability = (hash % 1000) / 1000 + creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor;

  return churnProbability;
}
