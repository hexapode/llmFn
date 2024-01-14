/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15592531, Surname=Moran, CreditScore=678, Geography=Spain, Gender=Female, Age=34.0, Tenure=1, Balance=123699.28, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=105221.76.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights remain the same)

    const tenureWeight = -0.02;  // Update the weight for tenure

    // ... (previous variable calculations remain the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +  // Include the tenure factor in the weighted sum calculation
        // ... (other terms remain the same)

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}
