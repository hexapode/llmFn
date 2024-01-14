/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous calculation weights and steps)

    const customerIdImpact = (CustomerId % 997) * 0.002; // Using modulo of a prime number and applying a weight
    weightedSum += customerIdImpact; // Adding the impact of CustomerId to the weighted sum

    const probability = 5.80 / (1 + Math.exp(-weightedSum)); // Using the weighted sum to calculate probability

    return probability;
}
