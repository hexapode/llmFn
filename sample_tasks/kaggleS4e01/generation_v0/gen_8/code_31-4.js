/** // 0.5669591079143885 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15665784, Surname=Mazzi, CreditScore=652, Geography=Germany, Gender=Male, Age=37.0, Tenure=4, Balance=100781.75, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=147545.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision Tree Logic
    if (Geography === 'Germany' && Age > 30 && Age <= 40 && Balance > 100000) {
        return 1; // High probability of churn
    } else if (CreditScore < 600 && Age > 40) {
        return 1; // High probability of churn
    } else if (IsActiveMember === 0 && NumOfProducts === 1 && HasCrCard === 1) {
        return 1; // High probability of churn
    } else {
        return 0; // Low probability of churn
    }
}
