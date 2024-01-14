/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15662494, Surname=Genovese, CreditScore=563, Geography=France, Gender=Female, Age=70.0, Tenure=7, Balance=128135.99, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=170819.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure,
                        Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
    };

    // ... (same computations as previous function)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (same computations as previous function)
        + unusedParameterImpact  // Include impact of the unused parameter
        // ... (same computations as previous function)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
