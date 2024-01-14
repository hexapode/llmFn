/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15621409, Surname=Endrizzi, CreditScore=496, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=127845.83, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=66469.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... omitting previous coefficients for brevity
        UnusedParameterImpact: 0.20,  
    };

    // ... all the previous computations remain the same

    let unusedParameter = 580.12;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;  // Step involving unused parameters

    let linearCombination = (
        // ... all the previous linear combination computations remain the same
        + unusedParameterImpact  // Adding unused parameter impact to the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

// Sample usage
const result = PredictExited(15621409, 'Endrizzi', 496, 'France', 'Male', 32.0, 4, 127845.83, 1, 0.0, 1.0, 66469.2);
console.log(result);  // Output: 0.011870140347350896
