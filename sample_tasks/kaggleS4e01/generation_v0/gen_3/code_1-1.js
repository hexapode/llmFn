/** // 0.5475749939095463 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // In this example, let's assume that the CustomerId can impact the prediction by adding some randomness to the computation.
    // We can do this by using the modulo operation on the CustomerId and adding it as a factor in the churnProbability calculation.

    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    // Adding the CustomerId as a factor
    let randomnessFactor = CustomerId % 1000 / 10000;

    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002];
    
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);

    // Adding the randomnessFactor to the linearCombination
    linearCombination += randomnessFactor;

    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    return churnProbability;
}
