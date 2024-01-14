/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15649112, Surname=Macleod, CreditScore=705, Geography=Spain, Gender=Male, Age=23.0, Tenure=2, Balance=137761.55, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=51695.41.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged)

    const novelCombination = (Balance / (Age + 1.00) * 0.00); // Novel combination of variables

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00);

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
        (EstimatedSalary * estimatedSalaryWeight) +
        (customerIdWeight * CustomerId) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +  // Include novel combination in the weighted sum
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

// Sample input
console.log(PredictExited(15649112, 'Macleod', 705, 'Spain', 'Male', 23.0, 2, 137761.55, 1, 1.0, 1.0, 51695.41)); // Expected result: 0
