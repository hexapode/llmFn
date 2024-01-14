/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15598044, Surname=Yefimova, CreditScore=728, Geography=France, Gender=Male, Age=23.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=158887.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: -0.15,  // Add impact for unused parameter
        // ... (same as before)
    };

    // ... (same as before)

    // Calculate impact for unused parameter
    let unusedParameterImpact = (2 * Tenure - 3 * HasCrCard) * coefficients.UnusedParameterImpact;

    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        coefficients.UnusedParameterImpact * unusedParameterImpact +  // Add impact for unused parameter
        // ... (same as before)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
