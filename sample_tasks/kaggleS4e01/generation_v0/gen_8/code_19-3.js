/** // 0.49923490969774675 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15642885, Surname=Gray, CreditScore=792, Geography=France, Gender=Male, Age=49.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=199644.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision Tree Rules
    if (Geography === 'Germany' && Age <= 40) {
        return 0.9; // High probability of churn
    } else if (CreditScore < 600 && IsActiveMember === 0) {
        return 0.8; // Medium probability of churn
    } else {
        return 0.1; // Low probability of churn
    }
}
