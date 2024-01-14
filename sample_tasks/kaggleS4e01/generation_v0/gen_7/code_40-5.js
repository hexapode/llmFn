/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15692406, Surname=Liao, CreditScore=571, Geography=Spain, Gender=Male, Age=38.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=104469.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients)
        NovelParameterImpact: 0.03,
    };

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 100.12)) / (NumOfProducts + Balance);
    let novelCombination = (Age * 0.15) / (IsActiveMember === 1.00 ? 0.95 : 0.75);  // Novel combination adding Age and IsActiveMember

    // ... (other calculations)

    let linearCombination = (
        // ... (other linear combination)
        coefficients.NovelParameterImpact * novelCombination +
        // ... (other coefficients)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
