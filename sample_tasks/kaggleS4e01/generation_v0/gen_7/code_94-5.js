/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15705890, Surname=Kuo, CreditScore=557, Geography=France, Gender=Female, Age=35.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=119969.99.
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
        NewParameter: 0.00 // New variable for prediction
    };

    // ... (previous code)

    coefficients.NewParameter = (Age * Tenure + Balance) / (NumOfProducts + EstimatedSalary);
    let newParameterImpact = coefficients.NewParameter * 0.25;

    // ... (previous code)

    let linearCombination = (
        // ... (previous code)
        coefficients.NewParameterImpact * newParameterImpact + 
        // ... (previous code)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
