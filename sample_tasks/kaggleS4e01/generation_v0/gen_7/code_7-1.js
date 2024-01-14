/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15636016, Surname=Wreford, CreditScore=588, Geography=France, Gender=Female, Age=35.0, Tenure=1, Balance=78737.61, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=13018.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules based on the sample input
    if (Geography === 'France' && NumOfProducts === 1 && HasCrCard === 1 && IsActiveMember === 0) {
        return 1; // High likelihood of churn
    } else {
        return 0; // Low likelihood of churn
    }
}
