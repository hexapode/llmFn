/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15760456, Surname=Eberechukwu, CreditScore=731, Geography=France, Gender=Female, Age=62.0, Tenure=10, Balance=123711.73, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=171340.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const ageWeight = 0.03;  // Updating the weight for age

    // ... (other weights and calculations)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +  // Incorporating age into the weighted sum
        // ... (other weighted sums for parameters)

    // ... (remaining calculations)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
