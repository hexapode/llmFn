/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... previous weights and calculations

    // Convert CustomerId to a numerical value using a simple hash function
    const numericalCustomerId = Array.from(CustomerId).reduce((acc, char) => acc + char.charCodeAt(0), 0);

    const customerIdWeight = 0.000001; // Assign a weight for the CustomerId

    // Incorporate the numericalCustomerId into the weighted sum
    weightedSum += numericalCustomerId * customerIdWeight;

    // Calculate the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
