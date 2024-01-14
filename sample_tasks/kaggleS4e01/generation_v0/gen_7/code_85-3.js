/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15572626, Surname=Onio, CreditScore=632, Geography=France, Gender=Female, Age=46.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=27886.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same) ...

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;
    
    let linearCombinationWithUnusedParameter = linearCombination + unusedParameterImpact;

    const probability = 1.00 / (10.10 + Math.exp(-linearCombinationWithUnusedParameter));

    return probability;
}
