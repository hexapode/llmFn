/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15653776, Surname=Tuan, CreditScore=679, Geography=France, Gender=Male, Age=33.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=167984.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const balanceSalaryRatioWeight = 0.000005; // Adjust this weight accordingly

    const balanceSalaryRatio = (Balance !== 0) ? (Balance / EstimatedSalary) : 0;
    
    weightedSum += balanceSalaryRatio * balanceSalaryRatioWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
