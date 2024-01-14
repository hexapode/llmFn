/** // 0.46957241949497885 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15645496, Surname=Selezneva, CreditScore=613, Geography=France, Gender=Female, Age=46.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=146504.35.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remains the same as in the previous example)
        UnusedParameterImpact: 0.10,
        // ...
    };

    // ... (calculations remain the same as in the previous example)

    let unusedParameter = Math.exp(-Age) * 20.75 + Math.log(Tenure) * 3.21;

    let linearCombination = (
        // ... (same linear combination as in the previous example)
        + coefficients.UnusedParameterImpact * unusedParameter  
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
