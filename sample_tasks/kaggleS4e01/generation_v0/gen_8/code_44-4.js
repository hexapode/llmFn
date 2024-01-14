/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15662494, Surname=Hao, CreditScore=599, Geography=France, Gender=Female, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=131736.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (other weights and calculations)
    
    const tenureImpact = (Tenure < 2) ? -0.05 : (Tenure < 5) ? -0.01 : 0.07;

    // ... (other factors and weights)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted sums)
        + tenureImpact;

    const probability = 11.98 / (0.20 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15662494, "Hao", 599, "France", "Female", 38.0, 7, 0.0, 2, 0.0, 1.0, 131736.23);
console.log(result);
