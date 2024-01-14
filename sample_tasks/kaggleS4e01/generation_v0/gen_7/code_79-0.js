/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15606841, Surname=Ibbott, CreditScore=823, Geography=Spain, Gender=Male, Age=38.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=156603.7.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains the same)
    
    let ageNumProductsInteraction = (Age * NumOfProducts * 0.03) * (IsActiveMember === 1.00 ? 1.5 : 1.00); 

    // ... (previous code remains the same)

    let linearCombination = (
        // ... (previous coefficients remain the same)
        ageNumProductsInteraction +
        // ... (previous linearCombination remains the same)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
