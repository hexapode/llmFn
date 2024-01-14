/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15750476, Surname=Frolov, CreditScore=718, Geography=Spain, Gender=Female, Age=34.0, Tenure=7, Balance=93614.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=151654.29.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficient values remain unchanged)
        CustomParameterImpact: -1.01, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
    };

    // ... (same code as before)

    // New step using the unused parameter IsActiveMember
    let isActiveMemberImpact = 0.00;
    if (IsActiveMember === 0) {
        isActiveMemberImpact = 0.50;
    } else {
        isActiveMemberImpact = 0.00;
    }

    // ... (same code as before)

    let linearCombination = (
        // ... (same calculations as before)
        coefficients.IsActiveMember * IsActiveMember +  // Adding IsActiveMember impact to the linear combination
        // ... (same calculations as before)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
