/** // 0.660194032278276 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15653696, Surname=Milne, CreditScore=515, Geography=France, Gender=Female, Age=28.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=94141.75.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.05;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.20 : (Geography === 'Germany') ? 0.60 : -0.18;
    const genderWeight = (Gender === 'Female') ? 0.40 : -0.12;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = -1.48;
    const ageNumProductsInteractionWeight = 0.03;
    const hasCrCardWeight = -0.14;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.01);
    const estimatedSalaryWeight = 0.00;

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
        (EstimatedSalary * estimatedSalaryWeight) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight;
    
    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
