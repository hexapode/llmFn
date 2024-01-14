/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15603683, Surname=Ofodile, CreditScore=796, Geography=Spain, Gender=Female, Age=23.0, Tenure=3, Balance=146584.19, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=125445.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    // New parameter combination using Novel variable
    let novelCombination = (Age * 2.0) + (NumOfProducts * 1.5) - (Balance / 1000.0);

    // ... (previous code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        coefficients.ExtraParameterImpact * novelCombination +  // Incorporating novel combination variable
        // ... (previous code remains unchanged)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
