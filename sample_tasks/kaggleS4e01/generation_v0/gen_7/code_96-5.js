/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15591428, Surname=Olague, CreditScore=529, Geography=France, Gender=Female, Age=23.0, Tenure=9, Balance=126495.57, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=74588.41.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
    };

    // ... (previous calculation steps remain the same)
    
    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;
    
    // Add the impact of the unused parameter to the linear combination
    linearCombination += unusedParameterImpact;

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
