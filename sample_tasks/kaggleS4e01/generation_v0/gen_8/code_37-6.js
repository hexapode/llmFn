/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    // Compute the new feature based on the CustomerId
    const customerIdImpact = getCustomerIdImpact(CustomerId);

    // Add the customerIdImpact to the weighted sum
    weightedSum += customerIdImpact;

    // Apply the sigmoid function to get the probability
    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

    return probability;
}

function getCustomerIdImpact(CustomerId) {
    const weights = [0.02, 0.01, 0.03, 0.02, 0.01, 0.03, 0.02, 0.01];
    let customerIdImpact = 0;

    for (let i = 0; i < 8; i++) {
        const digit = parseInt(CustomerId.charAt(i));
        customerIdImpact += digit * weights[i];
    }

    // Normalizing to the range [0, 1] using a sigmoid function
    customerIdImpact = 1 / (1 + Math.exp(-customerIdImpact));

    return customerIdImpact;
}
