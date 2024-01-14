/** // 0.5803614072908377 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15638607, Surname=Lucchesi, CreditScore=512, Geography=France, Gender=Male, Age=30.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=88827.67.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.21,  
        ExtraParameterImpact: 0.77,  
        NovelCombinationImpact: 0.1,  // New coefficients for novel combination
    };

    // ... (previous code remains the same) 

    let novelCombination = (Age * Math.exp(Tenure) * Balance) / (NumOfProducts + 1.0);
    let novelCombinationImpact = novelCombination * coefficients.NovelCombinationImpact;

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (existing linear combination remains the same)
        + novelCombinationImpact
        // ... (remaining parameters and their coefficients)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
