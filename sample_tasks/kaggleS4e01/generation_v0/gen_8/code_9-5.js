/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15671534, Surname=Mazzanti, CreditScore=614, Geography=France, Gender=Male, Age=37.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=141706.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculation)

    const creditScoreAgeInteractionWeight = 0.005;

    const creditScoreAgeInteraction = CreditScore * Age * creditScoreAgeInteractionWeight;

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
        creditScoreAgeInteraction;

    const probability = 9887.90 / (-13.31 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15671534, 'Mazzanti', 614, 'France', 'Male', 37.0, 5, 0.0, 2, 1.0, 1.0, 141706.43));
