/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15603088, Surname=Onwudiwe, CreditScore=689, Geography=France, Gender=Male, Age=37.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=184474.72.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, UnusedParameter) {

    const coefficients = {
        // coefficients remain the same
    };

    // existing calculation remain the same

    let additionalImpact = (UnusedParameter - 500) / 200;

    let linearCombination = (
        // existing linear combination remains the same
        coefficients.AdditionalImpact * additionalImpact
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
