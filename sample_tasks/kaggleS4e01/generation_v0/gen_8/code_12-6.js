/** // 0.49448775328662986 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15590078, Surname=Burns, CreditScore=622, Geography=Germany, Gender=Male, Age=27.0, Tenure=9, Balance=139834.93, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=152733.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Implementing decision tree algorithm
    if (Geography === 'Germany' && Age <= 30 && Balance > 100000) {
        return 1; // High likelihood of churn
    } else if (CreditScore < 600 && (NumOfProducts === 2 || NumOfProducts === 3)) {
        return 1; // High likelihood of churn
    } else if (Age > 50 && IsActiveMember === 0) {
        return 1; // High likelihood of churn
    } else {
        return 0; // Unlikely to churn
    }
}
