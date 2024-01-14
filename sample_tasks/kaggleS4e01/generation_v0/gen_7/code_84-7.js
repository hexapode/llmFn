/** // 0.5839581102110044 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15732674, Surname=Udegbunam, CreditScore=543, Geography=Germany, Gender=Female, Age=49.0, Tenure=7, Balance=83049.65, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=77856.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm implementation
    if (Age <= 40 && NumOfProducts <= 2 && EstimatedSalary <= 100000) {
        if (Geography === 'Germany') {
            return 0.9; // High probability of churn
        } else {
            return 0.1; // Low probability of churn
        }
    } else {
        return 0.5; // Neutral prediction
    }
}
