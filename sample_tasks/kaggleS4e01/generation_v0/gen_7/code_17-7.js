/** // 0.5610986608727936 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15745250, Surname=Lettiere, CreditScore=561, Geography=France, Gender=Male, Age=29.0, Tenure=1, Balance=102643.23, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=86791.22.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let probability = 0;

    // Decision tree rules based on input parameters
    if (Geography === 'Germany') {
        if (Age < 30) {
            if (EstimatedSalary > 80000) {
                probability = 0.7; // High churn probability
            } else {
                probability = 0.3; // Medium churn probability
            }
        } else {
            probability = 0.1; // Low churn probability
        }
    } else {
        if (CreditScore > 600) {
            if (Balance > 100000) {
                probability = 0.2; // Medium churn probability
            } else {
                probability = 0.05; // Low churn probability
            }
        } else {
            probability = 0.01; // Very low churn probability
        }
    }

    return probability;
}
