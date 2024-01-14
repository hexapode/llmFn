/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15782418, Surname=Calabrese, CreditScore=597, Geography=France, Gender=Male, Age=34.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=83681.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
        UnusedParameterImpact: 0.20,  
    };

    // ... (previous code remains the same)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (previous code remains the same)
        + unusedParameterImpact // Add impact of unused parameter to the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
