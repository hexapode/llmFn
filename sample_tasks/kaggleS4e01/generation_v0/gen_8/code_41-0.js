/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15797748, Surname=Zito, CreditScore=586, Geography=France, Gender=Female, Age=53.0, Tenure=4, Balance=113672.18, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=182775.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Linear weighted sum model calculations
    // ... (same as before)

    // Decision tree-like approach
    let decisionTreePrediction = 0;
    if (Age > 50 && CreditScore > 550 && Balance > 100000 && EstimatedSalary > 150000) {
        decisionTreePrediction = 0.9; // High churn probability
    } else if (Age < 30 && CreditScore < 600 && Balance < 50000 && EstimatedSalary < 80000) {
        decisionTreePrediction = 0.1; // Low churn probability
    } else {
        decisionTreePrediction = 0.5; // Medium churn probability
    }

    // Combine predictions
    const combinedPrediction = (0.6 * probability) + (0.4 * decisionTreePrediction); // Weighted combination
    return combinedPrediction;
}
