/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15791767, Surname=Lucciano, CreditScore=748, Geography=France, Gender=Female, Age=34.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=176843.53.
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
        IsActiveMember: -1.77,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.53, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.21,  
        ExtraParameterImpact: 0.77,
        AnotherParameter: 0.35, // New coefficient added
    };

    // ... (previous variable definitions remain the same)

    // New variable calculation
    let anotherParameter = (Age * Tenure - (HasCrCard === 1.00 ? 500.00 : 226.54)) / (NumOfProducts + 2 * Balance);
    
    // Include the impact of the new parameter in the linear combination
    let linearCombination = (
        // ... (previous linear combination calculation remains the same)
        coefficients.NewParameterImpact * newParameter +
        coefficients.AnotherParameter * anotherParameter  // Impact of the new parameter
        // ... (rest of the linear combination remains the same)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
