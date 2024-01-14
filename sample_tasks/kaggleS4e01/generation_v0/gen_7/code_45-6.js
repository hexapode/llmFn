/** // 0.4744210554113651 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15678057, Surname=Nwankwo, CreditScore=690, Geography=France, Gender=Male, Age=40.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=139049.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain as before)
        UnusedParameterImpact: 0.10,
        // ...
    };

    // ... (other computations remain as before)

    let unusedParameter = (Age * 0.05 - Balance * 0.02 + Tenure * 0.07) / 3.14;
    let linearCombination = (
        // ... (other linear combination calculations remain as before)
        coefficients.UnusedParameterImpact * unusedParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
