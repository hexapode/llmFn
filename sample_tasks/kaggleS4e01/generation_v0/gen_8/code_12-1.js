/** // 0.5486796756517051 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15615091, Surname=Lucciano, CreditScore=706, Geography=Spain, Gender=Female, Age=32.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=160574.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules based on feature importance
    if (Geography === 'Germany') {
        if (Age < 40 && NumOfProducts === 1) {
            return 0.7; // High probability of churn
        } else {
            return 0.3; // Moderate probability of churn
        }
    } else if (Geography === 'Spain') {
        if (Balance > 0 && IsActiveMember === 0) {
            return 0.6; // High probability of churn
        } else {
            return 0.2; // Moderate probability of churn
        }
    } else {
        if (Age >= 30 && Age <= 40 && CreditScore > 700) {
            return 0.4; // Moderate probability of churn
        } else {
            return 0.1; // Low probability of churn
        }
    }
}
