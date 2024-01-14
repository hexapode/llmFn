/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15653595, Surname=Ch'in, CreditScore=687, Geography=Spain, Gender=Male, Age=57.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=39297.48.
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
    };

    // ... (previous code remains the same until this point)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // New step using the impact of the unused parameter
    let additionalImpact = unusedParameterImpact / 250.00;

    // Update linearCombination to include the impact of the additional step
    let linearCombination = (
        // ... (previous code remains the same until this point)
        + coefficients.AdditionalImpact * additionalImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
