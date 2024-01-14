/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15586811, Surname=Iloerika, CreditScore=696, Geography=France, Gender=Female, Age=40.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=143566.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (rest of the implementation)

    let weightedSum = // ... (previous weighted sum calculation)

    weightedSum += unusedParameterImpact;  // adding impact of the unused parameters

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15586811.00, "Iloerika", 696.00, "France", "Female", 40.00, 3.00, 0.00, 2.00, 0.00, 1.00, 143566.31);
console.log(result);
