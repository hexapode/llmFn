/** // -Infinity //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15783526, Surname=Moore, CreditScore=714, Geography=France, Gender=Female, Age=40.0, Tenure=5, Balance=76651.11, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=180598.46.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous implementation remains the same)

    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);

    // ... (rest of the implementation remains the same)

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
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight;

    const probability = 1.21 / (2.24 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15783526.00, "Moore", 714.00, "France", "Female", 40.00, 5.00, 76651.11, 2.00, 0.00, 1.00, 180598.46);
console.log(result);
