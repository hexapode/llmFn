/** // 0.42853126581147444 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15718406, Surname=Smith, CreditScore=686, Geography=Germany, Gender=Male, Age=34.0, Tenure=2, Balance=109958.15, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=163484.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous code remains unchanged)
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.21,  
        ExtraParameterImpact: 0.77,
        NovelCombinationImpact: 0.15, // New coefficient for the novel combination
    };

    // ... (previous code remains unchanged)

    // Novel combination of variables
    let novelCombination = (Age * Tenure) / (NumOfProducts + Balance) * EstimatedSalary;
    let novelCombinationImpact = novelCombination * coefficients.NovelCombinationImpact;

    // ... (remaining code remains unchanged)

    let linearCombination = (
        // ... (previous code remains unchanged)
        + novelCombinationImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
