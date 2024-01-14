/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  // ... (previous calculations)

  // Convert CustomerId to a numeric value using a hash function
  let customerIdHash = 0;
  for (let i = 0; i < CustomerId.length; i++) {
    let charCode = CustomerId.charCodeAt(i);
    customerIdHash = (customerIdHash << 5) - customerIdHash + charCode;
  }
  
  let customerIdFactor = customerIdHash / 1000000000; // Scale the hash value into a reasonable range
  let churnProbability = adjustedTenureFactor + balanceFactor + creditScoreFactor + ageFactor + numOfProductFactor + combinedIsActiveMemberFactor + estimatedSalaryFactor + genderFactor + geographyFactor + surnameFactor + hasHighBalanceFactor + customerAgeFactor + customerIdFactor;

  return churnProbability;
}
