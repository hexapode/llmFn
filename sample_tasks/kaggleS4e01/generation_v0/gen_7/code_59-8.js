/** // 0.6721709005949372 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15780254, Surname=Gartrell, CreditScore=654, Geography=France, Gender=Male, Age=40.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=183872.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree structure
    if (NumOfProducts <= 1) {
        if (IsActiveMember === 1.0) {
            return 0; // Low churn probability
        } else {
            if (Geography === 'Germany') {
                return 1; // High churn probability
            } else {
                return 0.5; // Medium churn probability
            }
        }
    } else {
        if (CreditScore > 600) {
            if (Age <= 40) {
                return 0; // Low churn probability
            } else {
                return 0.8; // High churn probability
            }
        } else {
            return 0.6; // Medium churn probability
        }
    }
}
