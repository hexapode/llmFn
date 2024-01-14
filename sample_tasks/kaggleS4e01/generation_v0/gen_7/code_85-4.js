/** // 0.5362374218264323 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15647896, Surname=Onyekachukwu, CreditScore=652, Geography=France, Gender=Female, Age=20.0, Tenure=1, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=131718.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree splits based on the most significant attributes
    if (Age < 25 && NumOfProducts > 2 && CreditScore > 600) {
        return 0.3; // Low probability of churn (stay)
    } else if (Geography === 'France' && EstimatedSalary < 100000) {
        return 0.6; // Moderate probability of churn
    } else {
        return 0.9; // High probability of churn
    }
}
