/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function hashCustomerId(customerId) {
  let hash = 0;
  for (let i = 0; i < customerId.length; i++) {
    let char = customerId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const randomFactor = hashCustomerId(CustomerId) % 104729; // Large prime number
    const customerIdWeight = randomFactor / 104729; // Scale the random factor to be between 0 and 1

    // ... (other weights and calculations)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (customerIdWeight); // Add the random factor to the weighted sum

    const probability = 0.99 / (0.00 + Math.exp(-weightedSum));

    return probability;
}
