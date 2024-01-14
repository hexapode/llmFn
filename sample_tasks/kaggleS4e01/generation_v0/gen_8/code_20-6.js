/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... [previous code up to the calculation of weightedSum]
    
    // Additional step using the CustomerId parameter
    const numericCustomerId = parseInt(CustomerId.replace(/\D/g, ''));
    const customerIdImpact = (numericCustomerId % 100) * 0.01; // Using modulo to create an impact from CustomerId

    weightedSum += customerIdImpact; // Adding the impact of CustomerId to the weighted sum
    
    const probability = 0.05 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
