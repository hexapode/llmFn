/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15750545, Surname=Kao, CreditScore=731, Geography=Spain, Gender=Male, Age=57.0, Tenure=1, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=103799.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code remains the same

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    // Update weightedSum to include novelCombination
    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... other weights ...
        novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15750545.00, 'Kao', 731.00, 'Spain', 'Male', 57.00, 1.00, 0.00, 3.00, 1.00, 0.00, 103799.77));
