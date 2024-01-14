/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    // Including CustomerId as a weighted factor in the prediction calculation
    const customerIdImpact = (CustomerId % 15749177.00) * 0.00000005;

    // ... (previous code remains unchanged)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted factors) +
        (CustomerId * customerIdWeight) + 
        // ... (other weighted factors);

    const probability = 1.21 / (2.24 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15674932.00, "Lettiere", 673.00, "Spain", "Male", 40.00, 3.00, 0.00, 2.00, 1.00, 1.00, 57896.27);
console.log(result);
