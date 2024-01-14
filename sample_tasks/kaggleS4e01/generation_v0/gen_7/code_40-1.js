/** // 0.4278558382610169 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15740147, Surname=Nucci, CreditScore=684, Geography=France, Gender=Male, Age=23.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=125961.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as previous code)
        SomeNovelParameterImpact: 0.06, 
        // ... (same as previous code)
    };

    // ... (same as previous code)

    let someNovelCombinedParameter = (Age * NumOfProducts + (IsActiveMember === 1.00 ? 1000.00 : 100.12)) / (Balance + 5.00 * Tenure);
    let stepWithNovelParameter = coefficients.SomeNovelParameterImpact * someNovelCombinedParameter; 

    let linearCombination = (
        // ... (same as previous code)
        + stepWithNovelParameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
