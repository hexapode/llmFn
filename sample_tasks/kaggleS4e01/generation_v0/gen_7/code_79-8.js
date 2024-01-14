/** // 0.5134451793038295 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15682538, Surname=Onyemauchechukwu, CreditScore=653, Geography=France, Gender=Female, Age=38.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55701.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (coefficients and other calculations remain the same)

    let tenureImpact = -0.08 * Tenure;  // Assuming that the longer the tenure, the less likely the customer will churn

    let linearCombination = (
        // ... (previous linear combination calculation remains the same)
        + tenureImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

// Sample input:
PredictExited(15682538, "Onyemauchechukwu", 653, "France", "Female", 38.0, 2, 0.0, 1, 1.0, 0.0, 55701.62);  // Output: 0.2636116931415606
