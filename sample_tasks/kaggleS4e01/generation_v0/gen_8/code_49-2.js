/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15690153, Surname=Maclean, CreditScore=631, Geography=France, Gender=Female, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=58043.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const tenureWeight = -0.03;  // Negative weight for tenure 

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted sums remain unchanged)
        (Tenure * tenureWeight) +  // Include tenure in the weighted sum

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15690153.00, "Maclean", 631.00, "France", "Female", 33.00, 1.00, 0.0, 1.00, 1.00, 0.0, 58043.02);
console.log(result);
