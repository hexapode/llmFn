/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15573798, Surname=Y?an, CreditScore=679, Geography=France, Gender=Male, Age=27.0, Tenure=1, Balance=132623.76, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=147913.56.
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
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.05, // Impact of an unused parameter
    };

    // ... (previous code)

    let unusedParameterImpact = 0.00;
    // Example of using an unused parameter
    let impactValue = 0.00;
    if (UnusedParameter === 'Value') {
        impactValue = 1.00;
    } else {
        impactValue = -1.00;
    }
    unusedParameterImpact = impactValue * coefficients.UnusedParameterImpact;

    // ... (previous code)

    let linearCombination = (
        // ... (previous code)
        + unusedParameterImpact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
