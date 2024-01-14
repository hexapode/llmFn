/** // 0.5897395901356218 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15686909, Surname=Hsiung, CreditScore=652, Geography=France, Gender=Female, Age=51.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=97734.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients)
        UnusedParameterImpact: 0.10,  
    };

    // ... (other calculations)

    let unusedParameter = (Age * 0.18) / (Tenure * 0.05);

    let linearCombination = (
        // ... (other linear combination calculations)
        coefficients.UnusedParameterImpact * unusedParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
