/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15690134, Surname=Hsia, CreditScore=721, Geography=Spain, Gender=Female, Age=34.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=153776.15.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous calculations remain the same as in the previous code)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (remaining calculations remain the same as in the previous code)

    let weightedSum = // ... (same as in the previous code)
    
    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability + unusedParameterImpact; // Adding the impact of the unused parameter to the final probability.
}

const result = PredictExited(15690134.00, "Hsia", 721.00, "Spain", "Female", 34.00, 9.00, 0.00, 2.00, 1.00, 1.00, 153776.15);
console.log(result);
