/** // 0.5896926048319734 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15688563, Surname=Marchesi, CreditScore=694, Geography=France, Gender=Male, Age=32.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=26116.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        NovelCombinationImpact: 0.15  // New coefficient for novel combination variable
    };

    // ... (previous code)

    // New combination of variables: Age divided by Tenure
    let novelCombination = Age / Tenure;
    let novelCombinationImpact = coefficients.NovelCombinationImpact * novelCombination;

    // ... (previous code)

    let linearCombination = (
        // ... (previous linear combination)
        + novelCombinationImpact
    );

    // ... (previous code)

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
