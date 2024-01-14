/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous code)
  
  // Hashing CustomerId and normalizing it between -0.1 and 0.1
  let hashedCustomerId = hashFunction(CustomerId);
  let normalizedCustomerId = ((hashedCustomerId % 2000000) / 10000000) - 0.1;
  
  // Include the normalized CustomerId in the churn probability calculation
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + normalizedCustomerId;

  return churnProbability;
}

// Sample hash function (simple for demonstration, not cryptographically secure)
function hashFunction(input) {
  let hash = 0;
  if (input.length == 0) return hash;
  for (let i = 0; i < input.length; i++) {
    let char = input.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}
