/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15658929, Surname=Taverner, CreditScore=683, Geography=Spain, Gender=Male, Age=29.0, Tenure=0, Balance=133702.89, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55582.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        UnusedParameterImpact: 0.10,  
    };

    // ... (previous calculations)

    let unusedParameter = (Tenure * Balance) / (EstimatedSalary + Age);

    let linearCombination = (
        // ... (previous linearCombination calculation)
        + coefficients.UnusedParameterImpact * unusedParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
