/** // 0.4177342932254445 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15772381, Surname=Smith, CreditScore=731, Geography=France, Gender=Male, Age=36.0, Tenure=6, Balance=86053.52, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=179093.26.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)

    let ageBalanceInteraction = -0.003 * Age * Balance;

    // ... (existing code)

    let linearCombination = (
        // ... (existing code)
        + ageBalanceInteraction
        // ... (existing code)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
