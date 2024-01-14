/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15603665, Surname=Lombardo, CreditScore=687, Geography=Germany, Gender=Female, Age=22.0, Tenure=0, Balance=122318.1, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=157557.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const tenureNumProductsInteractionWeight = -0.42;
    
    const tenureInteractionFactor = Tenure * NumOfProducts * tenureNumProductsInteractionWeight;
    
    weightedSum += tenureInteractionFactor;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15603665.00, 'Lombardo', 687.00, 'Germany', 'Female', 22.00, 0.00, 122318.10, 1.00, 1.00, 1.00, 157557.82));
