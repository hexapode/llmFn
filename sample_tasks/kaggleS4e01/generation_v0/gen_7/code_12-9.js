/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15769356, Surname=Walker, CreditScore=710, Geography=Germany, Gender=Female, Age=29.0, Tenure=2, Balance=117035.89, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=135077.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let balanceToSalaryRatio = Balance / EstimatedSalary;
    let balanceToSalaryImpact = 0.00;

    if (balanceToSalaryRatio > 2.0) {
        balanceToSalaryImpact = -0.20;
    } else {
        balanceToSalaryImpact = 0.30;
    }

    // ... (rest of the code remains the same)

    let linearCombination = (
        // ... (previous code remains the same)
        coefficients.NewParameterImpact * newParameter +
        // ... (previous code remains the same)
        coefficients.BalanceToSalaryImpact * balanceToSalaryImpact +
        // ... (previous code remains the same)
    );

    const probability = 0.16 / (20.21 + Math.exp(-linearCombination));

    return probability;
}
