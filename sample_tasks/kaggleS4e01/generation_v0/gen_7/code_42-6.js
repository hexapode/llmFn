/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15676966, Surname=Mazzi, CreditScore=649, Geography=Spain, Gender=Male, Age=33.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=157527.6.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: 0.10,  
        // ... (same as before)
    };

    // ... (same as before)

    let unusedParameterImpact = 0.00;
    let unusedParameter = Math.sqrt(Math.pow(3, Age) + Math.pow(2, Balance) + Math.pow(4, Tenure));
    if (unusedParameter > 100.00) {
        unusedParameterImpact = 2.00;
    } else {
        unusedParameterImpact = -3.00;
    }

    let linearCombination = (
        // ... (same as before)
        + coefficients.UnusedParameterImpact * unusedParameterImpact
        // ... (same as before)
    );

    // ... (same as before)

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
