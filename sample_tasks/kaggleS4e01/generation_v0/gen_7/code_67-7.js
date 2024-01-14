/** // 0.45393755383582696 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15786880, Surname=Uspensky, CreditScore=753, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=158023.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        CustomCombinationImpact: 0.05, // new coefficient for custom combination variable impact
    };

    // ... (existing variable computations)

    // New combination of variables
    let customCombination = (Age * CreditScore + NumOfProducts * Tenure) / (Balance + 1);
    let customCombinationImpact = customCombination * coefficients.CustomCombinationImpact;

    let linearCombination = (
        // ... (existing linear combination)
        + customCombinationImpact // new custom combination impact added to the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
