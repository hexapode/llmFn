/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15631693, Surname=H?, CreditScore=693, Geography=France, Gender=Male, Age=36.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=148811.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: 0.21,  
    };
  
    // ... (same as before)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same as before)
        + unusedParameterImpact
        // ... (same as before)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
