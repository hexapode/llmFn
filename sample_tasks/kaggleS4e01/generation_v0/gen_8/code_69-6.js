/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15602551, Surname=McLean, CreditScore=718, Geography=France, Gender=Female, Age=33.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=175844.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous logic remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    // Add the impact of unused parameter to the weighted sum
    weightedSum += unusedParameterImpact;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15602551.00, 'McLean', 718.00, 'France', 'Female', 33.00, 0.00, 0.00, 2.00, 1.00, 1.00, 175844.71));
