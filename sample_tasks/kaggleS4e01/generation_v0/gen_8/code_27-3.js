/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15761141, Surname=Palerma, CreditScore=604, Geography=Spain, Gender=Male, Age=40.0, Tenure=0, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=129984.2.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights and calculations remain the same

    const ageTenureInteractionWeight = -0.03;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00; // Existing calculation for tenure-balance interaction

    const interactionFactor = Age * Tenure * ageTenureInteractionWeight; // New interaction factor

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor + // Include the new interaction factor
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight;
    
    const probability = 0.54 / (-13.40 + Math.exp(-weightedSum));

    if (HasCrCard && IsActiveMember) {
        return probability - 1.15;
    } else {
        return probability;
    }
}
