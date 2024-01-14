/** // -Infinity //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15770121, Surname=Millar, CreditScore=683, Geography=Germany, Gender=Male, Age=34.0, Tenure=4, Balance=112290.22, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=2465.8.
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
    };

    // ... (previous code remains the same)

    let extraParameter = 1.0; // Define the extra parameter
    let extraParameterImpact = extraParameter * coefficients.ExtraParameterImpact; // Calculate impact of the extra parameter

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        + extraParameterImpact // Add the impact of the extra parameter to the linear combination
    );

    // ... (previous code remains the same)
    
    return probability;
}
