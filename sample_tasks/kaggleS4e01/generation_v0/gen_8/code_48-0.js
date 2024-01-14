/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... existing weights and calculations ...

    const customerIdImpact = (CustomerId % 10.00) * 0.02; // Modulo of CustomerId with 10 multiplied by a weight
    
    // ... existing calculations of weightedSum ...

    weightedSum += customerIdImpact; // Add the impact of CustomerId to the weighted sum

    // ... remaining calculations ...

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15677599.00, "T'ien", 535.00, "Spain", "Male", 51.00, 6.00, 131033.76, 1.00, 1.00, 177783.05);
console.log(result);
