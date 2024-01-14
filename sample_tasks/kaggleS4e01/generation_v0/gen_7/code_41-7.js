/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15588933, Surname=Tuan, CreditScore=749, Geography=France, Gender=Male, Age=30.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=79910.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients for other parameters)
        UnusedParameterImpact: -0.15,  
        // ... (other coefficients)
    };

    // ... (existing calculation logic)

    // New step using unused parameter
	let unusedParameterImpact = 0.00;
    let customUnusedParameter = (Tenure * Balance) / (NumOfProducts * EstimatedSalary);
    if (customUnusedParameter > 5.00) {
        unusedParameterImpact = 2.00;
    } else {
        unusedParameterImpact = -1.00;
    }

    let linearCombination = (
        // ... (existing linear combination calculation)
        coefficients.UnusedParameterImpact * unusedParameterImpact + 
        // ... (other linear combinations)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
