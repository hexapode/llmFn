/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15804822, Surname=Yobanna, CreditScore=553, Geography=Spain, Gender=Male, Age=26.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=126761.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)
    // Novel Combination of Variables
    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    
    // ... (rest of the code remains the same)

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (rest of the code remains the same)
        + novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15804822.00, 'Yobanna', 553.00, 'Spain', 'Male', 26.00, 2.00, 0.00, 2.00, 1.00, 0.00, 126761.2));
