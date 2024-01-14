/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15812198, Surname=Akhtar, CreditScore=687, Geography=France, Gender=Female, Age=42.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=146022.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous function)
    };

    // ... (same as previous function)

    let novelCombinedVariable = (Age * CreditScore + (IsActiveMember === 0.00 ? 75.00 : 100.00)) / (NumOfProducts + Balance);
    
    let linearCombination = (
        // ... (same as previous function)
        coefficients.NewCombinedVariableImpact * novelCombinedVariable +
        // ... (same as previous function)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
