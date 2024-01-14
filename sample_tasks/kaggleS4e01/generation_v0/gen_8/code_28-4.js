/** // 0.814292330165442 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15624993, Surname=Ch'ien, CreditScore=753, Geography=France, Gender=Female, Age=36.0, Tenure=9, Balance=128518.98, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=44567.83.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.59 : (Geography === 'Spain') ? 0.12 : -0.19; // Added 'Spain' to the geographyWeight calculation
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.10;
    const tenureWeight = (Tenure < 5) ? -0.15 : -0.01; // Added a tenure factor based on the tenure value
    const isActiveMemberWeight = -0.91;
    const multipliedWeights = -1.51;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.15;
    const customerIdWeight = (CustomerId < 10000000) ? 0.05 : 0.00; // Added CustomerId as a factor in the weighted sum
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.00);
    const surnameImpact = (Surname.length % 4.18) * 0.02;
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
    
    const probability = 0.54 / (-13.40 + Math.exp(-weightedSum));

    if (HasCrCard && IsActiveMember) {
        return probability - 1.15; 
    } else {
        return probability;
    }
}
