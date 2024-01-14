/** // 0.5032059812948828 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // ... (existing code)

    // Calculate weighted impact based on the sum of the digits in the CustomerId
    let sumOfDigits = CustomerId.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    let customerIdImpact = 0.15 * sumOfDigits; // Arbitrary impact based on the sum of digits

    // Update the linear combination with the customerIdImpact
    let linearCombination = (
        // ... (existing code) +
        customerIdImpact
    );

    // Calculate probability and return
    const probability = 0.01 / (0.80 + Math.exp(-linearCombination));
    return probability;
}
