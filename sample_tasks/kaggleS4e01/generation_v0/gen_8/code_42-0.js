/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15682540, Surname=Hsiung, CreditScore=594, Geography=France, Gender=Female, Age=40.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=113581.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // other weights and calculations remain the same as before
    const ageTenureInteractionWeight = -0.02; // introduce a weight for the interaction between age and tenure

    const interactionFactor = Age * Tenure * ageTenureInteractionWeight; // incorporate the age-tenure interaction into the calculation

    // calculate the weighted sum with the updated interaction factor
    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted parameters) ...
        interactionFactor +
        // ... (remaining weighted parameters) ...
   
    // apply the sigmoid function to get the probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
