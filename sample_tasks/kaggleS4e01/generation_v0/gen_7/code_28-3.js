/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15685500, Surname=Ch'ang, CreditScore=735, Geography=Germany, Gender=Male, Age=40.0, Tenure=6, Balance=133845.36, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176868.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous code)
    };

    // ... (same as previous code)

    // New step using a novel combination of variables
    let novelCombination = (Age * Balance) / (NumOfProducts * IsActiveMember + 1);

    let linearCombination = (
        // ... (same as previous code)
        coefficients.CustomParameterImpact * customParameter +
        // ... (same as previous code)
        novelCombination * 0.03  // Novel combination impact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
