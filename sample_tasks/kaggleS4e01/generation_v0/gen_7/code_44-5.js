/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15611029, Surname=Onyemauchechukwu, CreditScore=582, Geography=Germany, Gender=Male, Age=28.0, Tenure=5, Balance=115074.02, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=124954.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.36,
        IsActiveMember: -1.70,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.47, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.76,  
        NovelParameterImpact: 0.05
    };

    // Other calculations remain the same as in the previous function

    let novelParameter = (Age * NumOfProducts + (HsCrCard === 1.00 ? 2000.00 : 507.14)) / (Balance + 1.00);
    let novelParameterImpact = (novelParameter * coefficients.NovelParameterImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00);

    // Other calculations remain the same as in the previous function

    let linearCombination = (
        // ... (previous linear combination calculation)
        + coefficients.NovelParameterImpact * novelParameterImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
