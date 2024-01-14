/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15742632, Surname=Chinedum, CreditScore=627, Geography=France, Gender=Female, Age=36.0, Tenure=3, Balance=144851.94, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=79555.76.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code)

    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00);

    // ... (previous code)
  
    let linearCombination = (
        // ... (previous code)
        + ageBalanceImpact
        // ... (previous code)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
