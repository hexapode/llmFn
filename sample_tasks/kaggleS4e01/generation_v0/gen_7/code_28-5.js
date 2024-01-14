/** // 0.48050580893599576 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15776936, Surname=Thorpe, CreditScore=613, Geography=Germany, Gender=Male, Age=36.0, Tenure=5, Balance=137479.13, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=25669.1.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree-based prediction

    if (Geography === 'Germany' && NumOfProducts === 1 && EstimatedSalary < 50000) {
        return 0.8; // High probability of churn
    } else if (CreditScore < 600 && Age > 30) {
        return 0.7; // Moderate probability of churn
    } else if (Balance < 10000 || HasCrCard === 0) {
        return 0.5; // Moderate probability of churn
    } else {
        return 0.2; // Low probability of churn
    }
}
