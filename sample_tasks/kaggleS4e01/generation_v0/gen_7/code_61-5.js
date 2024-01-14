/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15780386, Surname=Ferri, CreditScore=648, Geography=France, Gender=Male, Age=59.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=173617.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let unusedParameter = Math.sin(Tenure) * Math.log(CreditScore);

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.UnusedParameterImpact * unusedParameter + 
        // ... (previous code remains the same)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
