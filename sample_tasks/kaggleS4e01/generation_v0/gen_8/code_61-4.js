/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15652214, Surname=Frolova, CreditScore=587, Geography=Spain, Gender=Male, Age=31.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=64460.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (remaining code remains the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other calculations remain the same)
        +(unusedParameterImpact);

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15652214.00, 'Frolova', 587.00, 'Spain', 'Male', 31.00, 9.00, 0.00, 2.00, 1.00, 1.00, 64460.06));
