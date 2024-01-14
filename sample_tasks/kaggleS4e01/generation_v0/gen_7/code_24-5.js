/** // 0.49926387413050566 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15775124, Surname=Nkemdilim, CreditScore=841, Geography=France, Gender=Male, Age=39.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=103557.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // (previous code remains the same)
    
    let novelCombination = (CreditScore * 0.3) + (Age * 0.1) + (EstimatedSalary * 0.2);
    let novelCombinationImpact = novelCombination * 0.02;
    
    // (previous code remains the same)

    let linearCombination = (
        // (previous code remains the same)
        + novelCombinationImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
