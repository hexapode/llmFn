/** // 0.7079667289917785 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15649793, Surname=Fanucci, CreditScore=705, Geography=Germany, Gender=Male, Age=55.0, Tenure=10, Balance=106807.64, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=166678.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation)

    const ageCreditScoreInteractionWeight = 0.0008; // Adjusted weight for the interaction factor

    const ageCreditScoreInteraction = Age * CreditScore * ageCreditScoreInteractionWeight;

    // ... (previous implementation)

    let weightedSum = // ... (previous implementation)
        + ageCreditScoreInteraction // Adding the new interaction factor to the weighted sum

    const probability = 1 / (1 + Math.exp(-weightedSum)); // Sigmoid function to obtain the probability between 0 and 1

    return probability;
}
