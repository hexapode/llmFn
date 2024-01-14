/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15572027, Surname=Olisaemeka, CreditScore=709, Geography=France, Gender=Male, Age=31.0, Tenure=4, Balance=153895.32, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151733.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the weighted sum using the given features and weights
    let weightedSum = /* ... calculate weighted sum as before ... */;
    
    // Set a threshold value for classification
    const threshold = 0.5;
    
    // Apply the decision tree algorithm
    if (weightedSum > threshold) {
        return 1; // predict churn
    } else {
        return 0; // predict stay
    }
}
