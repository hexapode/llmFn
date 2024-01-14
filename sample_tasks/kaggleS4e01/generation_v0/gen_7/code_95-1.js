/** // 0.580676287572139 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15623107, Surname=Chukwumaobim, CreditScore=727, Geography=France, Gender=Male, Age=29.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=34857.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged) ...
    
    let ageBalanceInteraction = (Age * Balance * 0.00002) + (IsActiveMember === 1.00 ? 0.02 : 0.00);

    // ... (remaining code remains unchanged) ...
    
    let linearCombination = (
        // ... (previous terms remain unchanged) ...
        + ageBalanceInteraction
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
