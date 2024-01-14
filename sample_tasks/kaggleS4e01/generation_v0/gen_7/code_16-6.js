/** // 0.6362205077025482 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15783526, Surname=Moore, CreditScore=714, Geography=France, Gender=Female, Age=40.0, Tenure=5, Balance=76651.11, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=180598.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    if (Geography === 'Germany' && NumOfProducts <= 1) {
        return 1.0; // High churn probability
    } else if (CreditScore <= 600 && Age > 30) {
        return 0.9; // High churn probability
    } else if (Balance > 100000) {
        return 0.7; // Medium churn probability
    } else {
        return 0.1; // Low churn probability
    }
}
