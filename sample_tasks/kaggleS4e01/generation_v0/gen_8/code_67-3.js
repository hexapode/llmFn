/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15703037, Surname=Mazzanti, CreditScore=562, Geography=France, Gender=Male, Age=34.0, Tenure=10, Balance=155973.88, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=167984.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (existing code remains the same)

    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    
    // ... (existing code remains the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (existing code remains the same)
        novelCombination +
        // ... (existing code remains the same)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15703037.00, 'Mazzanti', 562.00, 'France', 'Male', 34.00, 10.00, 155973.88, 1.00, 0.00, 1.00, 167984.61));
