/** // 0.5427059630533744 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15641604, Surname=Frolova, CreditScore=850, Geography=France, Gender=Female, Age=55.0, Tenure=10, Balance=98488.08, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=155879.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Implement decision tree-based approach here
    // Use conditional statements based on different features to make predictions
    
    if (Geography === 'Germany' && NumOfProducts > 1) {
        return 1; // high churn probability
    } else if (Age > 50 && Balance > 80000) {
        return 1; // high churn probability
    } else {
        return 0; // low churn probability
    }
}

console.log(PredictExited(15641604, 'Frolova', 850, 'France', 'Female', 55.0, 10, 98488.08, 2, 1.0, 0.0, 155879.57));
