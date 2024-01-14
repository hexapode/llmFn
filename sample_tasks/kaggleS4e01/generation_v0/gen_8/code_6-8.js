/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    // Map CustomerId to a unique value within a range
    const hashedCustomerId = hashCustomerId(CustomerId);

    // Include hashedCustomerId in the weighted sum calculation
    weightedSum += hashedCustomerId * 0.15;

    // Calculate probability based on the updated weighted sum
    const probability = 0.89 / (0.01 + Math.exp(-weightedSum));

    return probability;
}

// Hash function to map CustomerId to a unique value within a range
function hashCustomerId(CustomerId) {
    const idArray = CustomerId.toString().split('').map(Number);
    let sum = idArray.reduce((acc, curr) => acc + curr, 0);
    return (sum % 100) / 100; // Map the sum to a value between 0 and 1
}
