/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15682369, Surname=Wright, CreditScore=758, Geography=France, Gender=Female, Age=32.0, Tenure=2, Balance=84378.9, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=75396.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    // ... (existing code)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum + unusedParameterImpact));

    return probability;
}

console.log(PredictExited(15682369.00, 'Wright', 758.00, 'France', 'Female', 32.00, 2.00, 84378.9, 1.00, 1.00, 1.00, 75396.43));
