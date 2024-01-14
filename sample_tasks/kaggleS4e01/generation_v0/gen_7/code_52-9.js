/** // 0.5852062902988577 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15800793, Surname=Hsia, CreditScore=604, Geography=Germany, Gender=Female, Age=58.0, Tenure=4, Balance=182491.57, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=185830.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function definition)
        UnusedParameterImpact: 0.10,  
    };

    // ... (same as previous function definition)

    let unusedParameter = (Balance * Age) / (CreditScore * Tenure * EstimatedSalary - 100000);

    let linearCombination = (
        // ... (same as previous function definition)
        + coefficients.UnusedParameterImpact * unusedParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
