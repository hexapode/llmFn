/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15758769, Surname=Macleod, CreditScore=682, Geography=France, Gender=Male, Age=32.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=143463.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains the same)

    let salaryToBalanceRatio = EstimatedSalary !== 0 ? (EstimatedSalary / Balance) : 0;

    // ... (the rest of the code to calculate linearCombination remains the same)

    let linearCombination = (
        // ... (previous linear combination calculation)
        + coefficients.ExtraParameterImpact * salaryToBalanceRatio
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
