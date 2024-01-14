/** // 0.5335098380812807 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15740476, Surname=Ch'iu, CreditScore=741, Geography=France, Gender=Male, Age=43.0, Tenure=5, Balance=137780.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=120530.81.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Geography === 'France' && Age <= 25) {
        return 0; // high probability of staying
    } else if (Geography === 'Germany' && Age > 30 && IsActiveMember === 1) {
        return 1; // high probability of churning
    } else if (CreditScore < 600 && Balance > 100000) {
        return 1; // high probability of churning
    } else {
        return 0.5; // default probability
    }
}

console.log(PredictExited(15740476, "Ch'iu", 741, "France", "Male", 43.0, 5, 137780.07, 1, 1.0, 1.0, 120530.81));
