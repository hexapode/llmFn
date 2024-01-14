/** // 0.49703962402163304 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15582841, Surname=Zetticci, CreditScore=598, Geography=France, Gender=Male, Age=40.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=103764.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same as in the previous function)
        UnusedParameterImpact: 0.10,
        // ... (other coefficients remain the same as in the previous function)
    };

    // ... (other parameter calculations remain the same as in the previous function)

    let unusedParameter = (Age * 1.2) + (NumOfProducts * 0.8) - (EstimatedSalary * 0.6);
    
    let linearCombination = (
        // ... (previous linear combination calculations remain the same as in the previous function)
        + coefficients.UnusedParameterImpact * unusedParameter 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
