/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15612043, Surname=Lo Duca, CreditScore=850, Geography=France, Gender=Male, Age=35.0, Tenure=4, Balance=120905.03, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=176833.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm
    if (Geography === 'France' && Age <= 40 && NumOfProducts === 1 && EstimatedSalary > 80000) {
        return 0; // Likely to stay
    } else if (Geography === 'Germany' && Age > 40 && NumOfProducts === 2 && EstimatedSalary <= 80000) {
        return 1; // Likely to churn
    } else {
        return 1; // Default prediction
    }
}
