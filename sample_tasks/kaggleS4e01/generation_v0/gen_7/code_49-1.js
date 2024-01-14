/** // 0.49267982797065135 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15658969, Surname=Aksenov, CreditScore=649, Geography=France, Gender=Female, Age=51.0, Tenure=8, Balance=131768.67, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=105570.79.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        UnusedParameterImpact: -0.20,  // Impact of the unused parameter step
        // ... (same as before)
    };

    // ... (same as before)

    // New computation using unused parameters
    let unusedParameterStep = (2.5 * Gender === 'Male' ? 1 : 0) + (1.8 * Geography === 'France' ? 1 : 0) + (3.2 * Surname.length);

    let linearCombination = (
        // ... (same as before)
        + coefficients.UnusedParameterImpact * unusedParameterStep
        // ... (same as before)
    );


    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
