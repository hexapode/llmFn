/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15736487, Surname=Folliero, CreditScore=644, Geography=Spain, Gender=Male, Age=36.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=142331.62.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (coefficients remain the same as the previous example)
    };

    // ... (variable computation logic remains the same as the previous example)

    // New step in the computation
    let novelCombination = (Age * Math.sqrt(Tenure) + Balance * Math.pow(HasCrCard, 2)) / (NumOfProducts + 1);

    let linearCombination = (
        // ... (coefficients combination remain the same as the previous example)
        coefficients.NewParameterImpact * novelCombination +
        // ... (other variables remain the same as the previous example)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
