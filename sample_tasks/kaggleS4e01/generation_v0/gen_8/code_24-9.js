/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weights calculation ...

    // Introduce variability based on CustomerId
    const customerIdWeight = (hashCode(CustomerId) % 100) * 0.01;

    // ... rest of the function ...

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... other weighted calculations ...
        (CustomerId * customerIdWeight) + 
        // ... rest of the function ...
    
    const probability = 0.46 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}

// Hashing function to generate unique identifier for CustomerId
function hashCode(s) {
    let h;
    for(let i = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return Math.abs(h);
}
