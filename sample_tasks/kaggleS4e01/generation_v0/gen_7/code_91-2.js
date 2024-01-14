/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15722083, Surname=Mazzi, CreditScore=724, Geography=France, Gender=Female, Age=43.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=55829.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ...coefficients from previous implementation...
        UnusedParameterImpact: -0.05,  
    };

    // ...previous implementation steps...

    let unusedParameter = 109.01;
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ...previous linear combination...
        + unusedParameterImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
