/** // 0.5499124015128579 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15620111, Surname=Fan, CreditScore=659, Geography=France, Gender=Male, Age=40.0, Tenure=8, Balance=165298.12, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=60954.45.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    // New factor: Age and Tenure interaction
    let ageTenureInteraction = (Age * Tenure * 0.02) * (Tenure > 5 ? 1.5 : 1.0); 

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous linearCombination calculation)
        + ageTenureInteraction
        // ... (rest of the linearCombination calculation remains the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
