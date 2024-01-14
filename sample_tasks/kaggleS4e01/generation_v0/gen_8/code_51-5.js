/** // 0.31615581677052923 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15642291, Surname=Hsueh, CreditScore=645, Geography=Germany, Gender=Male, Age=24.0, Tenure=1, Balance=122532.35, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=170968.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany') {
        if (Age <= 25 && Balance > 100000) {
            return 0.7; // high probability of churn
        } else {
            if (CreditScore > 600) {
                return 0.3; // moderate probability of churn
            } else {
                return 0.1; // low probability of churn
            }
        }
    } else {
        if (NumOfProducts > 1) {
            if (HasCrCard === 1 && IsActiveMember === 0) {
                return 0.8; // high probability of churn
            } else {
                return 0.4; // moderate probability of churn
            }
        } else {
            return 0.2; // low probability of churn
        }
    }
}

const result = PredictExited(15642291, "Hsueh", 645, "Germany", "Male", 24.0, 1, 122532.35, 1.0, 0.0, 170968.47);
console.log(result);
