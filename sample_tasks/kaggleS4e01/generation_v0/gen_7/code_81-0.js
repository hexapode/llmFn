/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15690079, Surname=Ifeatu, CreditScore=615, Geography=France, Gender=Female, Age=66.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=130784.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        //... (same as previous function)
    };

    //... (same as previous function)

    let unusedParameter = 0.5;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        //... (same as previous function)
        + unusedParameterImpact
        //... (same as previous function)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
