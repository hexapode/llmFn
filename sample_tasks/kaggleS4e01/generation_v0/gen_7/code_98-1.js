/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15673877, Surname=Ibeabuchi, CreditScore=775, Geography=France, Gender=Female, Age=20.0, Tenure=6, Balance=109026.6, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=120801.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // ... (previous code)

    let linearCombination = (
        // ... (previous code)
        + unusedParameterImpact +
        // ... (previous code)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
