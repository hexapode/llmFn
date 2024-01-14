/** // 0.5632873239376973 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15773934, Surname=Fang, CreditScore=667, Geography=France, Gender=Male, Age=36.0, Tenure=0, Balance=88294.6, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=66979.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        UnusedParameterImpact: 0.20, // Impact of the unused parameter
    };

    // ... (existing calculations)

    let unusedParameter = Tenure * (Age / 100); // Example calculation using the unused parameter
    let unusedParameterImpact = coefficients.UnusedParameterImpact * unusedParameter; // Impact of the unused parameter

    let linearCombination = (
        // ... (existing linear combination)
        unusedParameterImpact // Adding impact of the unused parameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
