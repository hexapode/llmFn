/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15657771, Surname=Tien, CreditScore=645, Geography=France, Gender=Male, Age=40.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140889.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        TenureImpact: -0.1, // Adjust the impact based on significance
    };

    // ... (other parts of the function remain the same)

    let linearCombination = (
        // ... (other parts of the linear combination)
        coefficients.Tenure * Tenure + // Include tenure in the linear combination
        // ... (other coefficients and impacts)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
