/** // 0.5175280561863167 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15705899, Surname=Nwoye, CreditScore=648, Geography=France, Gender=Female, Age=34.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=158545.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree logic
    if (Age <= 30 && NumOfProducts <= 1 && EstimatedSalary > 100000) {
        return 1.0; // High likelihood of churn
    } else if (CreditScore <= 600 && Balance > 100000) {
        return 1.0; // High likelihood of churn
    } else if (Geography === 'Germany' && Gender === 'Male' && HasCrCard === 1) {
        return 0.8; // Moderate likelihood of churn
    } else {
        return 0.2; // Low likelihood of churn
    }
}

console.log(PredictExited(15705899, 'Nwoye', 648, 'France', 'Female', 34, 3, 0.0, 1, 1, 1, 158545.24));
