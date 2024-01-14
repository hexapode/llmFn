/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15585198, Surname=K'ung, CreditScore=526, Geography=Germany, Gender=Male, Age=45.0, Tenure=8, Balance=113680.53, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=116781.68.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (other calculations remain the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted sums remain the same)
        unusedParameterImpact +
        // ... (other weighted sums and interactions remain the same)

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15585198.00, "K'ung", 526.00, "Germany", "Male", 45.00, 8.00, 113680.53, 1.00, 1.00, 1.00, 116781.68);
console.log(result);
