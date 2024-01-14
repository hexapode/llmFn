/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const scaledCustomerId = (CustomerId - 15566543) / (15793029 - 15566543); // Scaling CustomerId to be between 0 and 1
    const customerIdImpact = scaledCustomerId * 0.05; // Considering the impact of CustomerId
    // ... (previous weights and calculations)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        // ... (other weighted features)
        (scaledCustomerId * customerIdWeight) + // Adding the impact of CustomerId
        // ... (other weighted features)

    const probability = 0.46 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
