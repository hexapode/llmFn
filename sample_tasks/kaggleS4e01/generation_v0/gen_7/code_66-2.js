/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15737888, Surname=Hsia, CreditScore=612, Geography=Germany, Gender=Male, Age=36.0, Tenure=4, Balance=115888.04, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=172646.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
        UnusedParameterImpact: 0.20, 
    };

    // ... (same as previous function)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same as previous function)
        + unusedParameterImpact
        // ... (same as previous function)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
