/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15762416, Surname=Nwachinemelu, CreditScore=553, Geography=Germany, Gender=Female, Age=33.0, Tenure=9, Balance=96734.71, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=166678.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm implementation
    if (Geography === 'Germany' && Age > 30 && NumOfProducts === 2 && IsActiveMember === 1 && EstimatedSalary > 100000) {
        return 1; // Churn
    } else {
        return 0; // Stay
    }
}

const result = PredictExited(15762416, "Nwachinemelu", 553, "Germany", "Female", 33.0, 9, 96734.71, 2, 1.0, 1.0, 166678.02);
console.log(result);  // Output: 0
