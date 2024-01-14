/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15663917, Surname=Y?an, CreditScore=661, Geography=France, Gender=Female, Age=48.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176713.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const tenureFactor = (Tenure > 5) ? -0.3 : 0.1;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other factors remain the same)
        (Tenure * tenureWeight) +
        // ... (other factors remain the same)
        tenureFactor;
    
    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
