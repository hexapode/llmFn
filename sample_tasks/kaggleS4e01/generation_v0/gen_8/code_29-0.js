/** // 0.6110731983072083 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15654901, Surname=Trevisani, CreditScore=653, Geography=France, Gender=Male, Age=33.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=123585.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Geography === 'Germany' && Age > 40) {
        return 1.0; // High probability of churn
    } else if (Balance === 0 && NumOfProducts === 1) {
        return 0.2; // Low probability of churn
    } else if (CreditScore < 600 || EstimatedSalary < 50000) {
        return 0.8; // High probability of churn
    } else {
        return 0.05; // Very low probability of churn
    }
}
