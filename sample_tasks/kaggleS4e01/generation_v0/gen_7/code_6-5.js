/** // 0.6240594160859326 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15770039, Surname=Fiorentino, CreditScore=493, Geography=Germany, Gender=Female, Age=42.0, Tenure=5, Balance=112290.22, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183492.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree conditions and thresholds
    if (Geography === 'Germany' && EstimatedSalary > 100000) {
        return 1; // High probability of churn
    } else if (Age > 40 && Balance > 100000) {
        return 1; // High probability of churn
    } else if (CreditScore < 500 && NumOfProducts === 1) {
        return 1; // High probability of churn
    } else if (IsActiveMember === 0 && Tenure < 5) {
        return 1; // High probability of churn
    } else {
        return 0; // Low probability of churn
    }
}
