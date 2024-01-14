/** // -Infinity //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15726490, Surname=Tikhonov, CreditScore=663, Geography=Germany, Gender=Male, Age=32.0, Tenure=6, Balance=179904.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=116977.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define thresholds for numerical features
    const ageThreshold = 40;
    const creditScoreThreshold = 600;
    const balanceThreshold = 100000;
    const estimatedSalaryThreshold = 100000;

    // Decision tree rules
    if (Age > ageThreshold && CreditScore > creditScoreThreshold) {
        return 0; // Likely to stay
    } else if (Balance > balanceThreshold || EstimatedSalary > estimatedSalaryThreshold) {
        return 1; // Likely to churn
    } else {
        // Additional rules or default prediction
        // ...
    }
}

console.log(PredictExited(15726490, 'Tikhonov', 663, 'Germany', 'Male', 32.0, 6, 179904.0, 2, 0.0, 1.0, 116977.42));
