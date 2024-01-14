/** // 0.4981969081051576 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15651569, Surname=Kambinachi, CreditScore=705, Geography=France, Gender=Male, Age=39.0, Tenure=10, Balance=104719.51, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=70553.92.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        NovelVariableImpact: 0.03,  // New coefficient for the novel variable
    };

    const novelVariable = (CreditScore * NumOfProducts + Age) / (Balance + 1.13 * Tenure);
    
    let linearCombination = (
        // ... (existing linear combination calculation)
        coefficients.NovelVariableImpact * novelVariable  // Include the novel variable impact in the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
