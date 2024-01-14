/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15771873, Surname=L?, CreditScore=784, Geography=Germany, Gender=Male, Age=54.0, Tenure=9, Balance=125734.2, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=134626.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... coefficients remain the same
        UnusedParameterImpact: 0.21,  
    };

    // ... existing computations remain the same

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... add current linear combination computations
        // ...
        + unusedParameterImpact  // Add unused parameter impact to the linear combination
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
