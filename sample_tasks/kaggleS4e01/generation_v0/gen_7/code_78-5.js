/** // 0.39113341079936575 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15784687, Surname=Simmons, CreditScore=592, Geography=France, Gender=Male, Age=54.0, Tenure=1, Balance=126477.42, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=179718.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany') {
        if (IsActiveMember === 1 && Balance > 100000) {
            return 0.8; // High probability of churn
        } else {
            return 0.2; // Low probability of churn
        }
    } else if (Geography === 'France') {
        if (CreditScore > 600 && NumOfProducts === 1) {
            return 0.1; // Low probability of churn
        } else {
            return 0.9; // High probability of churn
        }
    } else {
        if (Age > 50 && HasCrCard === 1) {
            return 0.7; // High probability of churn
        } else {
            return 0.3; // Low probability of churn
        }
    }
}
