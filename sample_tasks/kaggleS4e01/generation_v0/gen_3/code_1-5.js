/** // 0.5387028262302942 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15668032, Surname=Buchanan, CreditScore=669, Geography=France, Gender=Male, Age=31.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=79881.39.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    
    // Add a novel variable combination with Age, CreditScore and NumOfProducts
    let novelCombination = (Age * 0.1) + (CreditScore * 0.05) - (NumOfProducts * 0.02);
    
    
    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002, 0.03]; // Add the coefficient for the novel combination
    
    
    inputVector.push(novelCombination); // Adding the novel combination to the input vector
    
    
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);
    
    
    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    
    return churnProbability;
}
