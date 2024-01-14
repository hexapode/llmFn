/** // 0.47497137875303985 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15634281, Surname=Ting, CreditScore=656, Geography=France, Gender=Female, Age=39.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=676.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.49,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
        UnusedParameterImpact: 0.10, // New coefficient for the unused parameter
    };

    // ... (same as the previous function)

    let unusedParameterImpact = IsActiveMember * (1 - HasCrCard) * coefficients.UnusedParameterImpact; // Impact of the unused parameter

    let linearCombination = (
        // ... (same as the previous function)
        + unusedParameterImpact // Add the impact of the unused parameter to the linear combination
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
