/** // 0.8097996434791241 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15607178, Surname=Ekechukwu, CreditScore=750, Geography=Germany, Gender=Female, Age=26.0, Tenure=10, Balance=96553.52, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=140075.55.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.59 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.10;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.91;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.15;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.00);
    const surnameImpact = (Surname.length % 4.18) * 0.02;
    const salaryCreditScoreInteractionWeight = (EstimatedSalary * CreditScore * 0.00);
    const ageCreditScoreInteractionWeight = (Age * CreditScore * 0.00);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    const unusedParametersImpact = (HasCrCard * (1 - IsActiveMember) * 0.8);

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
        unusedParametersImpact;
    
    const probability = 0.05 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
