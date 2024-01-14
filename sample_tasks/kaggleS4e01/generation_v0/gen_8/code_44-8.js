/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15678385, Surname=Fiorentino, CreditScore=496, Geography=France, Gender=Female, Age=40.0, Tenure=8, Balance=92476.88, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=83247.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains the same)

    const balanceToSalaryRatio = (Balance / EstimatedSalary) * 0.06;

    // ... (existing code remains the same)

    let weightedSum = // ... (existing code remains the same) + balanceToSalaryRatio;

    const probability = 11.98 / (0.20 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15678385.00, "Fiorentino", 496.00, "France", "Female", 40.00, 8.00, 92476.88, 1.00, 0.00, 0.00, 83247.19);
console.log(result); 
