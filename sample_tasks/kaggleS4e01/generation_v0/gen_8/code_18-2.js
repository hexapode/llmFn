/** // 0.7836251917599871 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15675328, Surname=Palermo, CreditScore=494, Geography=Spain, Gender=Male, Age=21.0, Tenure=9, Balance=98495.61, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88146.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Existing weights and calculations
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.58 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.10;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.91;
    const multipliedWeights = -1.50;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.15;
    const customerIdWeight = 0.00;
    
    // New variable and its weight
    const tenureAgeBalanceInteractionWeight = Tenure * Age * Balance * 0.00000005;

    // Interaction factor including the novel combination of variables
    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + tenureAgeBalanceInteractionWeight;
    
    // Weighted sum including the new variable
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
        (CustomerId * customerIdWeight);
    
    // Probability computation
    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}

// Test with the provided sample input
console.log(PredictExited(15675328, 'Palermo', 494, 'Spain', 'Male', 21.0, 9, 98495.61, 1, 1.0, 1.0, 88146.86));
