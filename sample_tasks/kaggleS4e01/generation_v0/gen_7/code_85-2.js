/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15672056, Surname=Trevisani, CreditScore=628, Geography=France, Gender=Female, Age=41.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=54530.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        //... (same as before)
        UnusedParameterImpact: 0.21,  
        //... (same as before)
    };

    // ... (computation same as before)

    let unusedParameter = 109.01;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        //... (same as before)
        + unusedParameterImpact // Adding impact of unused parameter
        //... (same as before)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
