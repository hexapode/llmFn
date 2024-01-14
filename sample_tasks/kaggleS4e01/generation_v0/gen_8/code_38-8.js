/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15809509, Surname=Lombardo, CreditScore=821, Geography=Germany, Gender=Male, Age=29.0, Tenure=6, Balance=132615.7, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=172618.52.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const balanceToSalaryRatio = Balance / (EstimatedSalary + 1.00);
    const balanceToSalaryRatioWeight = 0.25;  // Adjust weight based on its importance

    let weightedSum = // ... (previous weightedSum calculation) + (balanceToSalaryRatio * balanceToSalaryRatioWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));  // Using logistic function for probability calculation

    return probability;
}
