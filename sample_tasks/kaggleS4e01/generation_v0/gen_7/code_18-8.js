/** // 0.5090846620306545 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15592028, Surname=Udinese, CreditScore=711, Geography=France, Gender=Female, Age=32.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=92820.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let unusedParameterImpact = 0;
    if (Geography === 'France' && Gender === 'Female') {
        unusedParameterImpact = 0.08;
    } else {
        unusedParameterImpact = -0.03;
    }

    let linearCombination = (
        // ... (previous code remains the same)
        + unusedParameterImpact
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
