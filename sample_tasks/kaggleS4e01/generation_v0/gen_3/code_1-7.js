/** // 0.6312392190639421 //**/
/**
I try on the following input and it returned 0.9999999999999973" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15594947, Surname=Y?an, CreditScore=594, Geography=France, Gender=Female, Age=27.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=187985.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    // Updated coefficients
    let coefficients = [0.01, 0.05, -0.03, 0.00003, -0.1, -0.02, -0.05, 0.0000001];
    
    // Updated input vector
    let inputVector = [CreditScore, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary];
    
    // Calculate the linear combination
    let linearCombination = coefficients.reduce((acc, coeff, index) => acc + (coeff * inputVector[index]), 0);
    
    // Apply the logistic function to get churn probability
    let churnProbability = 1 / (1 + Math.exp(-linearCombination));
    
    return churnProbability;
}
