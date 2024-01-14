/** // 0.6629942316753026 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15780212, Surname=Okwudilichukwu, CreditScore=604, Geography=France, Gender=Male, Age=35.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=114514.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree split points and leaf node probabilities
    if (Geography === 'France') {
        if (NumOfProducts <= 1) {
            if (CreditScore <= 650) {
                return 0.9;  // High probability of churn
            } else {
                return 0.2;  // Low probability of churn
            }
        } else {
            return 0.1;      // Low probability of churn
        }
    } else if (Geography === 'Germany') {
        return 0.3;          // Medium probability of churn
    } else {
        if (Age <= 30) {
            return 0.8;      // High probability of churn
        } else {
            return 0.2;      // Low probability of churn
        }
    }
}
