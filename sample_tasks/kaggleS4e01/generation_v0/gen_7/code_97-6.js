/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15732670, Surname=Yeh, CreditScore=751, Geography=France, Gender=Male, Age=45.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=180344.69.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let novelCombinationVariable = (CreditScore * Age) / (Tenure + 1.0);
    let novelCombinationImpact = 0.05; // Assume a constant impact for the new variable
    
    // ... (continue with the previous calculations)

    let linearCombination = (
        // ... (previous coefficients and parameters)
        + coefficients.NewCombinationImpact * novelCombinationVariable  // Adding the impact of the novel combination
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
