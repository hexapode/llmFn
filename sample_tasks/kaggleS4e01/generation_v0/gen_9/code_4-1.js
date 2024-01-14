/** // 0.7875851829017212 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  let averageCustomerId = 15674932; // Average of the provided CustomerId values
  let customerIdFactor = Math.abs(CustomerId - averageCustomerId) / (15679804 - 15566543); // Scale the difference to be between 0 and 1
  
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
  
  let churnProbability = creditScoreFactor + ageFactor + balanceFactor + activeMemberFactor + tenureFactor + numOfProductsFactor + hasCrCardFactor + salaryFactor + genderFactor + geographyFactor + 0.1 * customerIdFactor; // Include customerIdFactor with a low weight

  return churnProbability;
}
