/** // 0.47089783594262774 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15632365, Surname=Booth, CreditScore=542, Geography=Germany, Gender=Male, Age=33.0, Tenure=9, Balance=142871.27, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=77737.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany' && Age <= 40 && NumOfProducts <= 2) {
        return 0.9; // High probability of churn
    } else if (Balance > 100000 && Age <= 35) {
        return 0.8; // Moderate probability of churn
    } else {
        return 0.1; // Low probability of churn
    }
}
