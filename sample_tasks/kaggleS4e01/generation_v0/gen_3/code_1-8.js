/** // 0.54366771053046 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // We can use the CustomerId to add some randomness to the prediction
    let randomFactor = CustomerId % 11;
    
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, randomFactor];
    
    
    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002, 0.1];
    
    
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);
    
    
    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    
    return churnProbability;
}
