/** // 0.5562247533485186 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15766378, Surname=Wan, CreditScore=707, Geography=Spain, Gender=Male, Age=45.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=196395.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree logic
    if (IsActiveMember === 0) {
        return 0; // The customer is likely to stay
    } else {
        if (Age < 30) {
            return 0; // The customer is likely to stay
        } else {
            if (Geography === 'France') {
                return 1; // The customer is likely to churn
            } else {
                if (Balance > 100000) {
                    return 1; // The customer is likely to churn
                } else {
                    return 0; // The customer is likely to stay
                }
            }
        }
    }
}
