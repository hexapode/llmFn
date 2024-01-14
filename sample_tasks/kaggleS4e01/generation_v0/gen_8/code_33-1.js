/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15575060, Surname=Hs?, CreditScore=758, Geography=Germany, Gender=Female, Age=49.0, Tenure=6, Balance=131647.01, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=119348.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const tenureBalanceInteractionWeight = Tenure * Balance * 0.0000002; // Introducing the tenure and balance interaction factor

    // ... (previous code remains unchanged)
    
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
        tenureBalanceInteractionWeight + // Including the tenure and balance interaction factor
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight +
        unusedParameterImpact;

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

   return probability;
}
