
// I will use a simple logistic regression model to predict the churn probability based on the input parameters.
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Combine and manipulate the input parameters to compute the churn probability
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    // Define the model coefficients
    let coefficients = [0.05, 0.02, -0.08, 0.0001, -0.1, -0.02, -0.05, 0.00002];
    
    // Compute the linear combination of input values and coefficients
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);
    
    // Apply the logistic function to compute the churn probability
    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    // Return the computed churn probability
    return churnProbability;
}
