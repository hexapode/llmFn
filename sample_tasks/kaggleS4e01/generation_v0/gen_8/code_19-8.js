/** // 0.8152207330559526 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15748327, Surname=Ndubuisi, CreditScore=619, Geography=Spain, Gender=Male, Age=35.0, Tenure=1, Balance=128743.26, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=53553.37.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
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
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.00);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
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
        tenureBalanceInteractionWeight;
    
    // New novel combination of variables
    const novelCombination = Math.pow((Age * NumOfProducts), 2) * 0.0001;
    
    weightedSum += novelCombination;
    
    const probability = 1.00 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}

// Test
console.log(PredictExited(15748327, 'Ndubuisi', 619, 'Spain', 'Male', 35.0, 1, 128743.26, 1, 1.0, 0.0, 53553.37));
