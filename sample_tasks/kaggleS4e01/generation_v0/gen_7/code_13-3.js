/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15702486, Surname=Oluchukwu, CreditScore=749, Geography=Spain, Gender=Male, Age=45.0, Tenure=0, Balance=131778.81, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=54865.92.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    // ... (same as before)

    let tenureBalanceImpact = (1 / (1 + Math.exp(-(0.05 * Tenure + 0.0000002 * Balance)));

    let linearCombination = (
        // ... (same as before)
        + coefficients.TenureBalanceImpact * tenureBalanceImpact
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
