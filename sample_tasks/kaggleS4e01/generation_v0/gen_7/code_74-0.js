/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15784323, Surname=Uspenskaya, CreditScore=728, Geography=Germany, Gender=Male, Age=22.0, Tenure=8, Balance=154737.56, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=27474.41.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same)
    };

    // ... (other parts of the function remain the same)

    let unusedParameter = 110.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        // ... (other parts of the linear combination remain the same)
        unusedParameterImpact +  // It's important to include the impact of the unused parameter
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.01) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
