/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15757895, Surname=Nnaife, CreditScore=678, Geography=France, Gender=Male, Age=30.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=82351.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        TenureImpact: -0.1,  // New coefficient for tenure impact
        // ... (other coefficients)
    };

    // ... (existing code)

    let tenureImpact = coefficients.TenureImpact * Tenure;  // Calculate tenure impact

    // ... (existing code)

    let linearCombination = (
        // ... (existing linear combination calculation)
        + tenureImpact  // Include tenure impact in the linear combination
    );

    // ... (existing code)

    return probability;  // Return the calculated probability
}
