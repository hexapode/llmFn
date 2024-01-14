/** // -Infinity //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    // New weight for CustomerId parameter
    const customerIdWeight = 0.0000003;  // This weight is just an example and can be fine-tuned based on data analysis

    // Include the CustomerId parameter in the weighted sum
    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other calculations remain the same)
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight);  // New computation using the CustomerId parameter

    // ... (remaining code remains the same)

    return probability;
}
