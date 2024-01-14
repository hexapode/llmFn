/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15641110, Surname=Goliwe, CreditScore=627, Geography=France, Gender=Female, Age=40.0, Tenure=5, Balance=109013.63, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=173434.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: 0.20,  
    };

    // ... (same as before)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same as before)
        + unusedParameterImpact  // Include the impact of unused parameter in the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
