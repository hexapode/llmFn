/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15754940, Surname=Zikoranachidimma, CreditScore=695, Geography=France, Gender=Female, Age=46.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=71047.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // existing code ...

    let unusedParameter = 110.01;
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // existing code ...

    let linearCombination = (
        // existing parameters ...
        unusedParameterImpact // new unusedParameterImpact added to linearCombination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
