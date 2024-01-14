/** // 0.49831933122492306 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15807052, Surname=P'eng, CreditScore=580, Geography=France, Gender=Male, Age=29.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=106761.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.20,  
        ExtraParameterImpact: 0.78,  
        NovelVariableImpact: 0.03
    };

    // ... (previous code)

    let novelVariable = (Age * Tenure * NumOfProducts * Balance) / (HasCrCard * (IsActiveMember === 1.00 ? 500.00 : 250.00));
    let novelVariableImpact = novelVariable * coefficients.NovelVariableImpact;

    // ... (previous code)

    let linearCombination = (
        // ... (previous linear combination calculation)
        novelVariableImpact 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
