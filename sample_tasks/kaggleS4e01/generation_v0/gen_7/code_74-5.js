/** // 0.5210498371722203 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15717155, Surname=Milano, CreditScore=573, Geography=Spain, Gender=Female, Age=45.0, Tenure=7, Balance=65612.55, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=100403.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree splits based on important features
    if (Geography === 'Germany') {
        if (Age <= 40 && Balance <= 50000) {
            return 0; // Predict stay
        } else {
            return 1; // Predict churn
        }
    } else if (Geography === 'Spain') {
        if (CreditScore <= 600) {
            return 1; // Predict churn
        } else {
            return 0; // Predict stay
        }
    } else {
        return 1; // Predict churn
    }
}
