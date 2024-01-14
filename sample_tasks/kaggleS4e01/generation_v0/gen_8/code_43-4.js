/** // 0.4930554108626923 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function hashCustomerId(CustomerId) {
    // Implement a hash function to map the CustomerId to a value between 0 and 1
    // For example, we can use the modulus of the CustomerId by a large prime number and normalize the result to be between 0 and 1
    return (CustomerId % 999983) / 999983;
}

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weights and calculations
    
    const hashedCustomerId = hashCustomerId(CustomerId);
    const customerIdWeight = 0.1; // Adjust the weight based on the impact of CustomerId
    
    let weightedSum = // ... previous weighted sum calculation
        + (hashedCustomerId * customerIdWeight);
        
    const probability = 12.21 / (1 + Math.exp(-weightedSum));

    return probability;
}

// Example usage
const result = PredictExited(15633608.00, "Walker", 639.00, "France", "Female", 38.00, 6.00, 137843.80, 1.00, 0.00, 1.00, 172557.77);
console.log(result);
