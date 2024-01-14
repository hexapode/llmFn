/** // 0.5016065921915976 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15804486, Surname=Brown, CreditScore=653, Geography=Germany, Gender=Male, Age=31.0, Tenure=7, Balance=116822.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=108891.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree model based on feature thresholds
    if (Geography === 'Germany' && Age <= 40 && Balance > 100000) {
        return 1.0; // high probability of churning
    } else if (Age <= 30 && NumOfProducts === 1 && IsActiveMember === 1) {
        return 0.0; // low probability of churning
    } else {
        return 0.5; // default probability
    }
}
