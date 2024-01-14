/** // 0.6363843468468866 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15732660, Surname=Black, CreditScore=769, Geography=France, Gender=Male, Age=27.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=57876.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // Coefficients from previous implementation...
        NewCombination: 0.33  // New coefficient for novel combination of variable
    };
    
    // ... (Previous code remains unchanged)
    
    let novelCombination = Math.sqrt(Age * CreditScore) + Math.cbrt(NumOfProducts * EstimatedSalary);
    let newCombinationImpact = coefficients.NewCombination * novelCombination;

    // ... (Keep the previous calculation code)

    let linearCombination = (
        // ... (Previous linearCombination code remains the same)
        + coefficients.NewCombination * newCombinationImpact  // Include the impact of new combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
