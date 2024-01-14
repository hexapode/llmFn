/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15726776, Surname=Milne, CreditScore=667, Geography=France, Gender=Male, Age=31.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=27448.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    // Additional step using novel combination
    const novelCombination = (Balance / (Age + 1.00) * 0.05);
    
    // ... (code continues with the rest of the calculation)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15726776.00, 'Milne', 667.00, 'France', 'Male', 31.00, 9.00, 0.0, 1.00, 1.00, 0.00, 27448.31));
