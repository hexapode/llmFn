/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15703264, Surname=Chukwufumnanya, CreditScore=735, Geography=France, Gender=Male, Age=44.0, Tenure=9, Balance=120681.63, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94823.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing code...

    let balanceToSalaryRatio = Balance / EstimatedSalary;
    let balanceToSalaryImpact = balanceToSalaryRatio * 0.35;  // Adding impact based on the balance to salary ratio

    // Existing code...

    let linearCombination = (
        // Existing coefficients...
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        // Continuing with the existing coefficients...
        balanceToSalaryImpact +
        // Existing code...
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));
    return probability;
}
