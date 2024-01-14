/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15775490, Surname=H?, CreditScore=595, Geography=France, Gender=Male, Age=40.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=169921.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.006;
    const ageWeight = 0.07;
    const balanceWeight = 0.0001;
    const geographyWeight = (Geography === 'France') ? -0.18 : (Geography === 'Germany') ? 0.65 : -0.22;
    const genderWeight = (Gender === 'Female') ? 0.39 : -0.11;
    const tenureWeight = -0.04;
    const isActiveMemberWeight = -0.95;
    const multipliedWeights = -1.80;
    const ageNumProductsInteractionWeight = 0.01;
    const hasCrCardWeight = -0.12;
    const customerIdWeight = 0.00001;
    
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
        (EstimatedSalary * 0.00005) + 
        (CustomerId * customerIdWeight);
    
    const probability = 1.00 / (1 + Math.exp(-weightedSum));

    return probability;
}
