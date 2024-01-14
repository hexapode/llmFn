/** // 0.6274758141192688 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15720702, Surname=Kornilova, CreditScore=697, Geography=France, Gender=Male, Age=41.0, Tenure=7, Balance=153040.83, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=40250.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    const relationshipDurationWeight = -0.05; // Assuming a negative impact on churn probability

    const relationshipDurationFactor = Tenure * IsActiveMember * relationshipDurationWeight;

    // ... (existing code)

    let weightedSum = // ... (existing calculation)
        + relationshipDurationFactor;

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15720702, "Kornilova", 697, "France", "Male", 41.0, 7, 153040.83, 1.0, 1.0, 40250.82);
console.log(result);
