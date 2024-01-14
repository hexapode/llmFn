/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15737452, Surname=Maclean, CreditScore=751, Geography=France, Gender=Male, Age=32.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=62810.91.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.43,
        CustomParameterImpact: -1.42, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.25, // New impact for unused parameter
    };

    // ... (same as before)

    // New step using the unused parameter
    let unusedParameterImpact = (CustomerId * 0.05) / (Tenure * 0.02);

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        // ... (same as before)
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * unusedParameterImpact // Include the impact of the unused parameter
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
