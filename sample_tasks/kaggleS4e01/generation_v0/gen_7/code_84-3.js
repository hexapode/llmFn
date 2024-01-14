/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15740147, Surname=Cremonesi, CreditScore=725, Geography=France, Gender=Female, Age=37.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=93777.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        UnusedParameterImpact: -0.67  // update impact of the unused parameter
    };

    // ... (other unchanged calculations)

    // Step using unused parameter
    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;
    
    // ... (other unchanged calculations)

    let linearCombination = (
        // ... (other unchanged calculations) + unusedParameterImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
