/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15809847, Surname=Mancini, CreditScore=732, Geography=Spain, Gender=Male, Age=37.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=150784.26.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        UnusedParameterImpact: -0.31,
        // ... (previous coefficients)
    };

    // ... (previous code)

    let unusedParameter = Tenure * 50.67;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    // ... (previous code)

    let linearCombination = (
        // ... (previous linear combination)
        unusedParameterImpact +
        // ... (previous linear combination)
    );

    const probability = 1.00 / (1010.10 + Math.exp(-linearCombination));

    return probability;
}
