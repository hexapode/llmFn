/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15761717, Surname=Holloway, CreditScore=683, Geography=Spain, Gender=Female, Age=21.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=155743.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        UnusedParameterImpact: 0.10,
        // ... (existing coefficients)
    };

    // ... (existing computations)

    let unusedParameterImpact = 0.00;
    // Applying impact based on unused parameters
    unusedParameterImpact = (Age * 0.5) + (Tenure * 0.2) + (Balance * 0.3) - (CreditScore * 0.1);

    // ... (existing computations)

    let linearCombination = (
        // ... (existing linear combination calculation)
        + coefficients.UnusedParameterImpact * unusedParameterImpact
    );

    // ... (existing probability calculation)

    return probability;
}
