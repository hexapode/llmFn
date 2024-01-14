/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15597914, Surname=H?, CreditScore=699, Geography=France, Gender=Female, Age=33.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=120511.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
    };

    // ... (same as before)

    let unusedParameter = 0.00;  // adding a new unused parameter
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same as before)
        + unusedParameterImpact  // Including the impact of the new unused parameter
        // ... (same as before)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
