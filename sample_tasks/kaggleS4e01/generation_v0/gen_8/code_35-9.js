/** // 0.4982244327345527 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... other weights and calculations

    // Calculate the average value of the digits in the CustomerId
    const digitSum = CustomerId.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const customerIdImpact = digitSum / 8.0 * 0.07; // Use 8.0 as it is the average length of the CustomerId

    // Incorporate the impact of the CustomerId into the weighted sum
    let weightedSum = // ... (previous calculations)
        + (CustomerId * customerIdImpact);

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

    return probability;
}
