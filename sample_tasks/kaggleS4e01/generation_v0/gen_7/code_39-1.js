/** // 0.44771180170351177 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15809800, Surname=Toscani, CreditScore=718, Geography=France, Gender=Male, Age=53.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=59636.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules for demonstration purpose
    if (CreditScore <= 650) {
        return 1; // High likelihood of churn
    } else if (Age <= 35 && NumOfProducts > 1) {
        return 1; // High likelihood of churn
    } else if (Geography === 'Germany' && IsActiveMember === 0) {
        return 1; // High likelihood of churn
    } else {
        return 0; // Low likelihood of churn
    }
}
