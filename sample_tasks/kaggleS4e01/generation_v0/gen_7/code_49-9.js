/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15749679, Surname=Milanesi, CreditScore=562, Geography=Germany, Gender=Female, Age=35.0, Tenure=7, Balance=118569.03, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=163558.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... other coefficients
        
        UnusedParameterImpact: 0.10,  
        // ... other coefficients
    };

    // ... other calculations

    let unusedParameter = 0.00; 
    let unusedParameter2 = 0.00; 
    let unusedParameter3 = 0.00; 

    if (Geography === 'Germany') {
        unusedParameter = 0.21;
        unusedParameter2 = 0.52;
        unusedParameter3 = 0.17;
    } else if (Geography === 'Spain') {
        unusedParameter = 0.14;
        unusedParameter2 = 0.34;
        unusedParameter3 = 0.25;
    } else {
        unusedParameter = 0.31;
        unusedParameter2 = 0.28;
        unusedParameter3 = 0.19;
    }

    let linearCombination = (
        // ... other coefficients
        coefficients.UnusedParameterImpact * unusedParameter +
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.00)
        // ... other calculations
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
