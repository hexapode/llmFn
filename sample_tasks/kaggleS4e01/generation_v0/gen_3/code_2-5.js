/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    let sum = inputVector.reduce((acc, val) => acc + val, 0);
    
    let churnProbability = sum / 1000;  // Simplified linear combination and scaling
    
    return churnProbability;
}
