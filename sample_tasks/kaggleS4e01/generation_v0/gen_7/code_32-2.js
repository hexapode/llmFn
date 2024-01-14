/** // 0.6189077209333853 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15638463, Surname=Chukwufumnanya, CreditScore=583, Geography=France, Gender=Female, Age=23.0, Tenure=5, Balance=85827.61, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=138891.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        // ... (same as before)
        NovelParameterImpact: 0.03, // Adding a new coefficient for the novel parameter
        // ... (same as before)
    };

    // ... (same as before)

    let novelParameter = (Age * Balance) / (CreditScore + Tenure);
    let novelParameterImpact = coefficients.NovelParameterImpact * novelParameter; // Calculating impact of novel parameter

    // ... (same as before)

    let linearCombination = (
        // ... (same as before) + 
        novelParameterImpact // Adding the impact of novel parameter to the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
