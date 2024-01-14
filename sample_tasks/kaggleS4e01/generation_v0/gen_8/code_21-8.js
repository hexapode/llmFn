/** // 0.8177792616159664 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15802585, Surname=Zetticci, CreditScore=550, Geography=Germany, Gender=Male, Age=32.0, Tenure=4, Balance=111009.64, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=101834.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.58 : -0.19;
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
    const ageHasCrCardInteractionWeight = (Age * HasCrCard * 0.01); // New step using Age and HasCrCard

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
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageHasCrCardInteractionWeight; // Adding the effect of Age and HasCrCard interaction
    
    const probability = 0.05 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
