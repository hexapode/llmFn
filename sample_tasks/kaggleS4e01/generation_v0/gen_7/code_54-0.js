/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15720702, Surname=Chukwueloka, CreditScore=584, Geography=France, Gender=Male, Age=39.0, Tenure=1, Balance=125850.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=180598.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous)
        UnusedParameterImpact: 0.10,
        // ... (same as previous)
    };

    // ... (same as previous)
    
    let unusedParameterImpact = 0.00;
    // Using a sample calculation with unused parameters
    let unusedParameterCalculation = (1.35 * Age + 0.67 * Tenure) / (NumOfProducts + Balance);
    if (unusedParameterCalculation > 1000) {
        unusedParameterImpact = 1.20;
    } else {
        unusedParameterImpact = -0.78;
    }

    // ... (same as previous)

    let linearCombination = (
        // ... (same as previous) +
        coefficients.UnusedParameterImpact * unusedParameterImpact + // Include impact of unused parameter
        // ... (same as previous)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
