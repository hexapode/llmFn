/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15757577, Surname=Maughan, CreditScore=494, Geography=France, Gender=Male, Age=41.0, Tenure=8, Balance=150507.21, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=167984.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.27,
        IsActiveMember: -1.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.43,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.42,
        AgeBalanceImpact: 0.00,
        CreditScoreImpact: 0.00,
        UnusedParameterImpact: 0.10,
        ExtraParameterImpact: 0.76,
        ExtraVariableImpact: 0.15, // Added new variable impact
    };

    // ... (same code as previous implementation)

    let extraVariable = (CreditScore + Balance) * extraVariableImpact; // New variable calculation
    let linearCombination = (
        // ... (same code as previous implementation)
        + coefficients.ExtraVariableImpact * extraVariable  // Include the new variable impact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
