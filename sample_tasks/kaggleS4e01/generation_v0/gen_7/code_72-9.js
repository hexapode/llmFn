/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15672330, Surname=Padovano, CreditScore=694, Geography=France, Gender=Male, Age=39.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=73334.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        UnusedParameterImpact: 0.20,
        // ... (other coefficients)
    };

    // ... (previous code to calculate other impacts)

    let unusedParameter = 0.00;  
    // ... (code to calculate the value of the unused parameter)

    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // ... (previous code to calculate linear combination and probability)

    return probability;
}
