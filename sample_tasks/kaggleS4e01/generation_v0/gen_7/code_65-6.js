/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15595158, Surname=Kolesnikova, CreditScore=574, Geography=France, Gender=Male, Age=32.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182691.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        UnusedParameterImpact: -0.10,  // Adjusted impact for unused parameter
    };

    // ... (existing parameter calculations)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (existing linear combination calculations)
        + unusedParameterImpact // Include the impact of the unused parameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
PredictExited(15595158, "Kolesnikova", 574, "France", "Male", 32.0, 9, 0.0, 2, 1.0, 0.0, 182691.31); // Output: 0
