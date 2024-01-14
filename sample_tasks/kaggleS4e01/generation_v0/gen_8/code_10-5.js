/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)
    
    const lastFourDigits = CustomerId % 10000;
    const customerIdImpact = lastFourDigits % 10;

    weightedSum += customerIdImpact * 0.05; // Adjust the weighted sum based on the impact of CustomerId
    
    const probability = 98.88 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15702277.00, 'Onwuamaeze', 850.00, 'France', 'Male', 48.00, 1.00, 127992.75, 1.00, 0.00, 0.00, 59650.11));