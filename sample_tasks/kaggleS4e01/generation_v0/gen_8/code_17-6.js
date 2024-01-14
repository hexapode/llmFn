/** // 0.5782189638499762 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15623219, Surname=Smith, CreditScore=596, Geography=France, Gender=Male, Age=33.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=121189.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const salaryToBalanceRatio = EstimatedSalary !== 0 ? Balance / EstimatedSalary : 0;
    const salaryToBalanceRatioWeight = 0.3;

    let weightedSum = // ... (existing code)
        (salaryToBalanceRatio * salaryToBalanceRatioWeight);

    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
