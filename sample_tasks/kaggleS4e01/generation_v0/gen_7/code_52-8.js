/** // 0.50605545929286 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15771519, Surname=Nwachukwu, CreditScore=635, Geography=France, Gender=Male, Age=36.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=120829.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree structure
    if (Geography === 'Germany') {
        if (NumOfProducts <= 1) {
            if (Age <= 40) {
                return 0.2; // Probability of churn
            } else {
                return 0.1; // Probability of churn
            }
        } else {
            if (IsActiveMember === 1) {
                return 0.05; // Probability of churn
            } else {
                return 0.15; // Probability of churn
            }
        }
    } else if (Geography === 'Spain') {
        if (CreditScore <= 650) {
            return 0.3; // Probability of churn
        } else {
            return 0.1; // Probability of churn
        }
    } else {
        if (HasCrCard === 1) {
            return 0.05; // Probability of churn
        } else {
            return 0.1; // Probability of churn
        }
    }
}
