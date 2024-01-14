/** // 0.5450731093523541 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    // Extract the last digit or digits of the CustomerId and calculate the sum of the digits
    let idDigits = CustomerId.toString().split('').map(Number);
    let idSum = idDigits.reduce((acc, digit) => acc + digit, 0);
    
    // Add the sum of the digits from the CustomerId as an additional coefficient
    inputVector.push(idSum);
    
    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002, 0.01];
    
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);
    
    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    return churnProbability;
}
