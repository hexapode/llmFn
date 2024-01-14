/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15772479, Surname=Liao, CreditScore=712, Geography=France, Gender=Female, Age=46.0, Tenure=6, Balance=0.0, NumOfProducts=4, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=126033.9.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const ageCreditScoreInteractionWeight = 0.00003; // New interaction weight
    
    const ageCreditScoreInteraction = Age * CreditScore * ageCreditScoreInteractionWeight; // New interaction term
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        ageCreditScoreInteraction; // Include the new interaction term in the weighted sum
    
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
