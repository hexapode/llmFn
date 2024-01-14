/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15592751, Surname=Nnamdi, CreditScore=687, Geography=France, Gender=Female, Age=36.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=98820.09.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    // Calculate the ratio of EstimatedSalary to Balance
    let salaryBalanceRatio = EstimatedSalary !== 0 ? Balance / EstimatedSalary : 0.00;

    // Update linear combination with the new parameter (salaryBalanceRatio)
    let linearCombination = (
        // ... (previous linear combination calculation)
        coefficients.ExtraParameterImpact * salaryBalanceRatio
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
