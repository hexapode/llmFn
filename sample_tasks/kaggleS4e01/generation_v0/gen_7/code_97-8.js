/** // 0.5443682510066902 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15678928, Surname=Lucchese, CreditScore=687, Geography=France, Gender=Male, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139938.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm
    if (Geography === 'Germany') {
        if (NumOfProducts <= 1) {
            if (Age <= 40) {
                return 0.72; // High probability of churn
            } else {
                return 0.38; // Moderate probability of churn
            }
        } else {
            if (CreditScore <= 700) {
                return 0.55; // Moderate probability of churn
            } else {
                return 0.20; // Low probability of churn
            }
        }
    } else if (Geography === 'Spain') {
        if (IsActiveMember === 1) {
            return 0.12; // Low probability of churn
        } else {
            if (Balance <= 0) {
                return 0.58; // High probability of churn
            } else {
                return 0.33; // Moderate probability of churn
            }
        }
    } else {
        if (CreditScore > 650 && Age < 50) {
            return 0.25; // Low probability of churn
        } else {
            return 0.65; // High probability of churn
        }
    }
}
