/** // 0.663606392831842 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15574073, Surname=Yudina, CreditScore=628, Geography=France, Gender=Male, Age=34.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=143980.62.
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
    const novelCombinationWeight = (Balance / (Age + NumOfProducts + 1.00) * 0.08); // Step added: Novel combination of Balance, Age, and NumOfProducts

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
    
    const probability = 0.46 / (-13.40 + Math.exp(-weightedSum));

    return probability;
}
