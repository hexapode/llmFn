/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15742834, Surname=King, CreditScore=693, Geography=France, Gender=Female, Age=43.0, Tenure=4, Balance=152341.55, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=9241.78.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous code)
        UnusedParameterImpact: 0.05, // impact of unused parameter
    };

    let unusedParameterImpact = 0.00;
    // You can add computation or impact based on the unused parameter here
    if (UnusedParameter > 0) {
        unusedParameterImpact = 0.10;
    } else {
        unusedParameterImpact = -0.08;
    }

    // ... (same as previous code)
    let linearCombination = (
        // ... (same as previous code) +
        coefficients.UnusedParameterImpact * unusedParameterImpact // impact using the unused parameter
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
