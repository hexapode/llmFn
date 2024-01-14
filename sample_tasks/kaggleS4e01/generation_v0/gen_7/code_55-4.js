/** // 0.5741340839637816 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15794868, Surname=Iadanza, CreditScore=682, Geography=France, Gender=Female, Age=30.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=158527.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    if (Geography === 'Germany') {
        return 1.00; // high likelihood of churn for customers from Germany
    } else if (Age <= 30.00 && NumOfProducts > 1) {
        return 0.80; // moderate likelihood of churn for younger customers with multiple products
    } else if (CreditScore < 700 && Balance === 0.00) {
        return 0.60; // moderate likelihood of churn for customers with low credit score and zero balance
    } else {
        return 0.20; // low likelihood of churn by default
    }
}
