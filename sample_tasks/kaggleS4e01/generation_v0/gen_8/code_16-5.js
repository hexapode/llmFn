/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15756655, Surname=Manna, CreditScore=709, Geography=Spain, Gender=Male, Age=28.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=181850.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const tenureFactor = (Tenure < 2) ? -0.15 : (Tenure < 5) ? -0.10 : (Tenure < 8) ? -0.05 : 0.00;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted sum calculations remain the same)
        (tenureFactor) +
        // ... (other weighted sum calculations remain the same)
    
    const probability = 1.00 / (1 + Math.exp(weightedSum)); // Using sigmoid function to calculate probability

    return probability;
}
