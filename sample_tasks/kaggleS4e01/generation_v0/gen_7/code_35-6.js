/** // 0.5375542263045485 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15686957, Surname=Pinto, CreditScore=645, Geography=France, Gender=Female, Age=38.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=76637.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define rules based on the input features to predict churn
    if (NumOfProducts === 1 && CreditScore < 600) {
        return 1;
    } else if (Geography === 'Germany' && Age > 50) {
        return 1;
    } else if (IsActiveMember === 0 && Balance > 100000) {
        return 1;
    } else {
        return 0;
    }
}
