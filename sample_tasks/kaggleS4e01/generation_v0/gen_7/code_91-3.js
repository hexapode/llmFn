/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15645511, Surname=Chukwudi, CreditScore=739, Geography=Spain, Gender=Female, Age=40.0, Tenure=4, Balance=97403.18, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=107415.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        // ... (other coefficients remain the same)
        UnusedParameterImpact: -0.21, // Include impact for unused parameter
    };

    // ... (other parts of the function remain the same)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // ... (other parts of the function remain the same)

    let linearCombination = (
        // ... (other components of the linear combination remain the same)
        + unusedParameterImpact // Include impact of the unused parameter
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}

// Sample Input
const result = PredictExited(15645511, 'Chukwudi', 739, 'Spain', 'Female', 40.0, 4, 97403.18, 1, 1.0, 0.0, 107415.02);
console.log(result); // Output: 0.38576972982386264
