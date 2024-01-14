/** // 0.3538104678176478 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15798943, Surname=Alexander, CreditScore=607, Geography=Spain, Gender=Male, Age=39.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=132741.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree paths and associated probabilities
    if (Geography === 'Spain' && Age <= 40 && IsActiveMember === 0) {
        return 0.85; // High probability of churn
    } else if (CreditScore > 600 && NumOfProducts >= 2) {
        return 0.25; // Moderate probability of churn
    } else {
        return 0.05; // Low probability of churn
    }
}
