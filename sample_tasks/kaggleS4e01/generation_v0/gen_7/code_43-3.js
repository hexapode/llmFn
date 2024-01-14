/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15720509, Surname=Palermo, CreditScore=584, Geography=France, Gender=Male, Age=38.0, Tenure=9, Balance=105663.51, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=161326.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // other coefficients remain the same
        UnusedParameterImpact: -0.25, // impact from unused parameter
        // other coefficients remain the same
    };

    // other computations remain the same...

    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;

    // additional step using unused parameter
    let unusedParameterEffect = 0.0;
    let unusedParameter = 0.50; // sample value for unused parameter
    unusedParameterEffect = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // previous linear combination
        // ...
        + coefficients.UnusedParameterImpact * unusedParameterEffect // include unused parameter impact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
