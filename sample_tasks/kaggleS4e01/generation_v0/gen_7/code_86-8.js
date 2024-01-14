/** // 0.5876265273103416 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15769959, Surname=Hao, CreditScore=677, Geography=France, Gender=Male, Age=41.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=51548.14.
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
    };

    //... (existing code remains the same)

    let extraParameter = (Age * 1.5) / Tenure; // Adding Age/Tenure as an extra factor
    let extraParameterImpact = extraParameter * coefficients.ExtraParameterImpact;

    //... (existing code remains the same)

    let linearCombination = (
        //... (existing code remains the same)
        + extraParameterImpact // Adding the impact of the extra parameter to the linear combination
        //... (existing code remains the same)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
