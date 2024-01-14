/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15630725, Surname=Johnson, CreditScore=709, Geography=France, Gender=Female, Age=45.0, Tenure=5, Balance=92786.66, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173365.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Geography === 'France' && IsActiveMember === 1 && NumOfProducts === 1) {
        return 0.2; // low probability of churn
    } else if (Age > 40 && Balance > 50000 && NumOfProducts === 1) {
        return 0.1; // very low probability of churn
    } else {
        return 0.8; // high probability of churn for other cases
    }
}

console.log(PredictExited(15630725, 'Johnson', 709, 'France', 'Female', 45.0, 5, 92786.66, 1, 1, 1, 173365.9));
