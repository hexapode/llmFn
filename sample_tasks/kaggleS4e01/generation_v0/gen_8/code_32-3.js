/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned -0.048554435979814306" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15706799, Surname=Dickson, CreditScore=683, Geography=France, Gender=Female, Age=36.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=160891.7.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0006;
    const ageWeight = 0.0707;
    const balanceWeight = 0.0004;
    const geographyWeight = (Geography === 'France') ? -0.1423 : (Geography === 'Germany') ? 0.6803 : -0.4901;
    const genderWeight = (Gender === 'Female') ? 0.2201 : -0.1139;
    const tenureWeight = -0.0163;
    const isActiveMemberWeight = -0.7752;
    const multipliedWeights = -0.5270;
    const ageNumProductsInteractionWeight = -0.0720;
    const hasCrCardWeight = -0.3836;
    const customerIdWeight = 0.000007;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        (Age * NumOfProducts * ageNumProductsInteractionWeight) +
        (HasCrCard * hasCrCardWeight) +
        (CustomerId * customerIdWeight);

    const probability = 1 / (1 + Math.exp(-weightedSum));

   return probability;
}
