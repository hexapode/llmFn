/** // 0.4101530331517573 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15677146, Surname=Onyeoruru, CreditScore=543, Geography=France, Gender=Male, Age=45.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=153356.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... other coefficients

        UnusedParameterImpact: -0.60,
    };

    // ... other calculations

    let unusedParameterImpact = Gender === 'Male' ? coefficients.UnusedParameterImpact : 0.00;

    let linearCombination = (
        // ... other linear combination
        coefficients.UnusedParameterImpact * unusedParameterImpact
    );

    // ... calculate probability and return
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
