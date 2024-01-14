/** // 0.45081336171212005 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15632365, Surname=Booth, CreditScore=542, Geography=Germany, Gender=Male, Age=33.0, Tenure=9, Balance=142871.27, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=77737.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree logic
    if (Geography === 'Germany') {
        if (Age < 40 && Balance < 100000) {
            return 0.1; // Low churn probability
        } else {
            return 0.9; // High churn probability
        }
    } else if (Geography === 'Spain') {
        if (CreditScore > 500 && NumOfProducts === 1) {
            return 0.2; // Low churn probability
        } else {
            return 0.8; // High churn probability
        }
    } else {
        if (IsActiveMember === 1 && EstimatedSalary > 50000) {
            return 0.05; // Low churn probability
        } else {
            return 0.95; // High churn probability
        }
    }
}
