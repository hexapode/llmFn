/** // 0.4982244327345527 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15769356, Surname=Lo, CreditScore=562, Geography=Germany, Gender=Male, Age=43.0, Tenure=3, Balance=103391.54, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173365.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, InteractionScore) {
    const creditScoreWeight = 0.00;
    // ... (other weights remain the same)

    const interactionScoreWeight = 0.02;  // Weight for InteractionScore

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted sum components remain the same)
        (InteractionScore * interactionScoreWeight);  // Include InteractionScore in the weighted sum calculation

    const probability = 0.08 / (0.15 + Math.exp(-weightedSum));

   return probability;
}
