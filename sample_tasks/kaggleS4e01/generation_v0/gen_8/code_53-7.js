/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15751297, Surname=Wilson, CreditScore=792, Geography=France, Gender=Male, Age=28.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=161465.31.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    // ... (other weights and computations)

    const weightedSum = // ... (previous weighted sum calculation) + novelCombination;

    const probability = 1.21 / (2.05 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15751297.00, "Wilson", 792.00, "France", "Male", 28.00, 8.00, 0.00, 2.00, 1.00, 0.00, 161465.31);
console.log(result);
