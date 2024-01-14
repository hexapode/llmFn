/** // 0.6009527559030325 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15594827, Surname=Glasgow, CreditScore=675, Geography=France, Gender=Female, Age=34.0, Tenure=1, Balance=124619.33, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=163667.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree logic to predict customer churn
    if (Geography === 'Germany' && Age > 30) {
        return 1; // High probability of churn for German customers above 30 years old
    } else if (Balance > 100000 && NumOfProducts > 1) {
        return 1; // High probability of churn for customers with high balance and multiple products
    } else if (CreditScore < 600 && IsActiveMember === 0) {
        return 1; // High probability of churn for customers with low credit score and inactive members
    } else {
        return 0; // Low probability of churn for other cases
    }
}

console.log(PredictExited(15594827, 'Glasgow', 675, 'France', 'Female', 34.0, 1, 124619.33, 2, 0.0, 1.0, 163667.56)); // Output: 1
