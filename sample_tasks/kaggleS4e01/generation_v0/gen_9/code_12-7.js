/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculation steps)

  // Add step to incorporate CustomerId into the churn prediction calculation
  let numericCustomerId = hashCustomerId(CustomerId);
  let customerIdFactor = 0.005 * (numericCustomerId / 1000000);

  // Update the churnProbability calculation to include the customerIdFactor
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerIdFactor;

  return churnProbability;
}

function hashCustomerId(CustomerId) {
  // Simple hashing function to convert CustomerId to a numeric value
  let hash = 0;
  for (let i = 0; i < CustomerId.length; i++) {
    let char = CustomerId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}
