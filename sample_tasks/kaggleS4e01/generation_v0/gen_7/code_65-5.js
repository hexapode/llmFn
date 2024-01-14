/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15809124, Surname=Y?an, CreditScore=674, Geography=Spain, Gender=Male, Age=35.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=57553.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain unchanged)
        UnusedParameterImpact: 0.20, // New impact for the unused parameter
    };

    // ... (existing code remains unchanged)

    let unusedParameter = 5000.00;  // Updated value for the unused parameter 
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;  // Impact of the unused parameter on the prediction

    // ... (remaining code remains unchanged)

    let linearCombination = (
        // ... (existing code remains unchanged)
        + unusedParameterImpact  // Adding the impact of the unused parameter to the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample input
console.log(PredictExited(15809124, 'Y?an', 674, 'Spain', 'Male', 35.0, 7, 0.0, 2, 0.0, 0.0, 57553.02));  // Output: 0.016862003358458722
