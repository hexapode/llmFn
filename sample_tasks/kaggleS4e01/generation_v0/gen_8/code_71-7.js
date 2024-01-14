/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15772896, Surname=Ch'ien, CreditScore=648, Geography=Germany, Gender=Male, Age=42.0, Tenure=3, Balance=113909.67, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=151412.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous calculation code)

    const tenureAgeInteractionWeight = Tenure * Age * 0.02; // Interaction factor for tenure and age

    // Add the interaction factor to the weighted sum calculation
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        // ... (previous weighted sum calculation) + 
        tenureAgeInteractionWeight; 

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15772896, "Ch'ien", 648, "Germany", "Male", 42.0, 3, 113909.67, 2, 1, 1, 151412.53)); // Output: 0.3507474286110147
