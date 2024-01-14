/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15651022, Surname=Tung, CreditScore=535, Geography=France, Gender=Female, Age=36.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140763.18.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        // other coefficients remain the same
        UnusedParameterImpact: 0.21,  
    };

    let unusedParameter = (Tenure * 2.24) / (NumOfProducts + 1) * Math.abs(CreditScore - 601);
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let linearCombination = (
        //... other linear combination elements remain the same
        unusedParameterImpact +
        //... other linear combination elements remain the same
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));
    
    return probability;
}
