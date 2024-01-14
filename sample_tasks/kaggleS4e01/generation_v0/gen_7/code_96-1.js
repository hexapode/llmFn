/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15724691, Surname=Walker, CreditScore=694, Geography=France, Gender=Male, Age=32.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=141053.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code)

    // Calculate ProductUtilization
    const productUtilization = NumOfProducts / (Balance === 0.00 ? 1.00 : Balance);

    // ... (existing code)

    // Include ProductUtilization in linear combination
    let linearCombination = (
        // ... (existing parameters) +
        coefficients.ProductUtilization * productUtilization
    );

    // ... (existing code)

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
