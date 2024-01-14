/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15752857, Surname=Palerma, CreditScore=452, Geography=Germany, Gender=Male, Age=52.0, Tenure=3, Balance=98443.14, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=92033.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const balanceToSalaryRatio = Balance / EstimatedSalary;
    const balanceToSalaryRatioWeight = -0.85;

    const weightedSum = (CreditScore * creditScoreWeight) +
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
        (balanceToSalaryRatio * balanceToSalaryRatioWeight); // Include balance to salary ratio factor

    const probability = 0.05 / (-13.40 + Math.exp(-weightedSum));
    
    return probability;
}
