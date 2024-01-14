/** // 0.821257671772435 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15700540, Surname=Barrera, CreditScore=557, Geography=Germany, Gender=Female, Age=38.0, Tenure=2, Balance=129893.56, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=102076.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.60 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.43 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.17;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.00);
    const surnameImpact = (Surname.length % 4.17) * 0.03;
    const salaryCreditScoreInteractionWeight = (EstimatedSalary * CreditScore * 0.00);
    const ageCreditScoreInteractionWeight = (Age * CreditScore * 0.00);
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);

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
        ageCreditScoreInteractionWeight +
        novelCombinationWeight;

    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.07);
    weightedSum += unusedParameterImpact;

    
    const probability = 5.40 / (-13.40 + Math.exp(-weightedSum));

    if (HasCrCard && IsActiveMember) {
        return probability - 1.20; 
    } else {
        return probability;
    }
}
