/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15606397, Surname=Cameron, CreditScore=772, Geography=Germany, Gender=Female, Age=26.0, Tenure=1, Balance=152086.15, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=44719.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Other weights and calculations remain the same as before

    const balanceToSalaryRatio = Balance / EstimatedSalary * 0.20;

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
        balanceToSalaryRatio;  // Include the balance to salary ratio in the weighted sum

    const probability = 0.69 / (-13.69 + Math.exp(-weightedSum));

    return probability;
}
