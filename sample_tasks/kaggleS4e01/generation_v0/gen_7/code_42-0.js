/** // 0.5032111018183513 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15679963, Surname=Chigolum, CreditScore=804, Geography=Spain, Gender=Male, Age=43.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=82567.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same coefficients as before)
        UnusedParameterImpact: 0.10,
        // ... (other coefficients remain unchanged)
    };

    // ... (same computation as before)

    let unusedParameterImpact = 0.00;
    let unusedParameter = (EstimatedSalary > 50000.00) ? 1.00 : 0.00;
    unusedParameterImpact = coefficients.UnusedParameterImpact * unusedParameter;

    let linearCombination = (
        // ... (same linear combination as before)
        coefficients.UnusedParameterImpact * unusedParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
