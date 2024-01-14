/** // 0.41283308225832677 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15802758, Surname=Tien, CreditScore=709, Geography=France, Gender=Male, Age=37.0, Tenure=3, Balance=135643.21, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=74637.84.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules based on the input parameters
    if (Age <= 30 && NumOfProducts <= 2) {
        return 0.8; // High probability of churn
    } else if (Balance > 100000 && CreditScore > 700) {
        return 0.2; // Low probability of churn
    } else {
        if (Geography === 'France' && IsActiveMember === 1.0) {
            return 0.4; // Medium probability of churn
        } else {
            return 0.6; // Medium probability of churn
        }
    }
}
