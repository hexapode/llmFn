/** // 0.4797956672031382 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15781023, Surname=Ch'iu, CreditScore=637, Geography=Germany, Gender=Male, Age=29.0, Tenure=6, Balance=126433.59, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=172895.52.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Implement decision tree rules based on input parameters
    if (Geography === 'Germany' && IsActiveMember === 1 && EstimatedSalary > 100000) {
        return 0.8; // High probability of churn
    } else if (CreditScore < 650 && NumOfProducts > 1) {
        return 0.6; // Moderate probability of churn
    } else if (Age > 50 || Balance > 100000) {
        return 0.4; // Low probability of churn
    } else {
        return 0.1; // Very low probability of churn
    }
}
