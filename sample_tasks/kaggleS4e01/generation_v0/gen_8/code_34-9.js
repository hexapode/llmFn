/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15761148, Surname=Walker, CreditScore=653, Geography=France, Gender=Female, Age=35.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=86423.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary, TransactionActivity) {
    // ... (existing code)

    const transactionActivityWeight = (TransactionActivity >= 3) ? 0.15 : (TransactionActivity === 2) ? 0.08 : (TransactionActivity === 1) ? 0.03 : 0.00;

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
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight +
        unusedParameterImpact +
        (TransactionActivity * transactionActivityWeight);

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

   return probability;
}
