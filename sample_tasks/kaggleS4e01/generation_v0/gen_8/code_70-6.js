/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15649793, Surname=Fanucci, CreditScore=705, Geography=Germany, Gender=Male, Age=55.0, Tenure=10, Balance=106807.64, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=166678.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code)
    
    // Step including unused parameters impact
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (existing code)

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        // ... (other parameters) ...
        + unusedParameterImpact;
    // ... (existing code)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15649793.00, 'Fanucci', 705.00, 'Germany', 'Male', 55.0, 10.00, 106807.64, 1.00, 0.00, 0.00, 166678.28));
