/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15617482, Surname=Fyodorov, CreditScore=623, Geography=France, Gender=Male, Age=45.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=85787.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... existing code ...

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    // ... existing code ...

    const weightedSum = // ... existing code ... + novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15617482.00, 'Fyodorov', 623.00, 'France', 'Male', 45.00, 2.00, 0.00, 2.00, 1.00, 1.00, 85787.31));
