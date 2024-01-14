/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    // New step using CustomerId
    const hashCustomerId = (CustomerId % 100) / 100; // Transforming CustomerId into a numerical value
    const customerIdImpact = hashCustomerId * 0.08;

    // Adjust the weighted sum
    weightedSum += customerIdImpact;

    const probability = 0.46 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
