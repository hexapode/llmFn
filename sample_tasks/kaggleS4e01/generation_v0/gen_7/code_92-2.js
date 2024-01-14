/** // 0.43669407966618634 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15576044, Surname=Akabueze, CreditScore=554, Geography=Germany, Gender=Male, Age=44.0, Tenure=9, Balance=121823.26, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=79577.68.
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
        NovelParameterImpact: 0.33,
    };

    // ... (Previous code)

    let novelParameter = (HasCrCard === 1.00 ? 100.00 : 50.00) - (Age * (Tenure / 2.00));

    let linearCombination = (
        // ... (Previous linear combination)
        coefficients.NovelParameterImpact * novelParameter
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
