/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15772996, Surname=Rooke, CreditScore=659, Geography=Germany, Gender=Male, Age=42.0, Tenure=0, Balance=152092.44, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=83508.93.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Use a simple decision stump to make predictions
    if (Geography === 'Germany' && Age > 40 && IsActiveMember === 0) {
        return 1.0; // Predict churn
    } else {
        return 0.0; // Predict stay
    }
}
