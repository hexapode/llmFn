/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15735837, Surname=Hsueh, CreditScore=597, Geography=Spain, Gender=Female, Age=36.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=8559.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: -0.35,
    };

    // ... (same as before)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // New step with unused parameter impact
    let linearCombinationWithUnused = (
        linearCombination +
        unusedParameterImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombinationWithUnused));

    return probability;
}
