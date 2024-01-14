/** // 0.4327814979340388 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15605537, Surname=Pirozzi, CreditScore=693, Geography=France, Gender=Male, Age=29.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88659.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.35,
        IsActiveMember: -1.71,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.77,  
        NovelParameterImpact: 0.03,  // Novel parameter impact
    };

    // ... (previous code)

    // Computing the novel parameter
    let novelParameter = ((Age * Tenure) - (Balance / NumOfProducts)) * HasCrCard;

    // Adding the novel parameter to the linear combination
    let linearCombination = (
        // ... (previous code)
        + coefficients.NovelParameterImpact * novelParameter  // Added novel parameter impact
    );

    // ... (previous code)

    // Calculating the probability of churn
    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
