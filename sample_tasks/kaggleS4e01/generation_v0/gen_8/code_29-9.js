/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // other weights and calculations remain the same as before
    
    // New calculation incorporating CustomerId
    const customerIdImpact = (CustomerId % 100000) * 0.00002; // Taking the last few digits and multiplying by a small weight

    // Incorporating customerIdImpact into the weighted sum
    weightedSum += customerIdImpact;

    // Rest of the function remains the same
    const probability = 5.40 / (-13.40 + Math.exp(-weightedSum));

    if (HasCrCard && IsActiveMember) {
        return probability - 1.20; 
    } else {
        return probability;
    }
}
