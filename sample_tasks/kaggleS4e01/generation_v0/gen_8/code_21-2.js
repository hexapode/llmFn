/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // existing weights and calculations omitted for brevity
    
    const customerIdImpact = (CustomerId % 31) * 0.003; // Using modulo and prime number for impact

    // Include customerIdImpact in the weighted sum calculation
    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... other weighted sums
        (EstimatedSalary * 0.00) + 
        (customerIdImpact);  // Include the impact of CustomerId

    // Calculate probability as before
    const probability = 0.05 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
