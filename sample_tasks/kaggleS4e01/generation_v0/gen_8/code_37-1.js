/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15665590, Surname=Echezonachukwu, CreditScore=557, Geography=France, Gender=Female, Age=38.0, Tenure=1, Balance=122641.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=77830.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const balanceSalaryRatioWeight = 0.0015;
    const balanceToSalaryRatio = (Balance / EstimatedSalary);

    weightedSum +=
        (balanceToSalaryRatio * balanceSalaryRatioWeight);

    // ... (existing code)

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

   return probability;
}
