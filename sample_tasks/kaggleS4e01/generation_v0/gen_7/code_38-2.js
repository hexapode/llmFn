/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15571281, Surname=Nnachetam, CreditScore=616, Geography=France, Gender=Male, Age=33.0, Tenure=3, Balance=142876.32, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=176903.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.43,
        CustomParameterImpact: -1.42,
        UnusedParameterImpact: 0.37, // Impact of the unused parameter
    };

    // ... (existing calculations)

    let unusedParameterImpact = UnusedParameterImpact * (Surname.length + Age);

    // ... (existing linear combination)

    let linearCombination = (
        // ... (existing linear combination terms)
        coefficients.NewParameterImpact * newParameter +
        // ... (existing terms)
        coefficients.UnusedParameterImpact * unusedParameterImpact
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
