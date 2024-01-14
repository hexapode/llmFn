/** // 0.6052337248117756 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15674932, Surname=Okwudilichukwu, CreditScore=668, Geography=France, Gender=Male, Age=33.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=181449.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany' && Age > 40) {
        return 1.00; // High churn probability for older customers from Germany
    } else if (CreditScore < 600 && Balance < 1000) {
        return 0.85; // Medium churn probability for customers with low credit score and balance
    } else if (NumOfProducts === 1 && HasCrCard === 0 && IsActiveMember === 0) {
        return 0.70; // Medium churn probability for inactive customers with only one product and no credit card
    } else {
        return 0.15; // Low churn probability for other cases
    }
}
