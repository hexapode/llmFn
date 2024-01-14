/** // 0.4533655881062577 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15760849, Surname=Walker, CreditScore=676, Geography=Germany, Gender=Male, Age=29.0, Tenure=2, Balance=107604.66, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=126172.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Geography === 'Germany' && Age <= 35 && IsActiveMember === 1) {
        return 0.1; // Low probability of churn
    } else if (CreditScore <= 600 && NumOfProducts >= 2) {
        return 0.9; // High probability of churn
    } else {
        return 0.5; // Neutral probability of churn
    }
}
