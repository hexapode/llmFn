/** // 0.8201247941382195 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15765694, Surname=Bage, CreditScore=584, Geography=Spain, Gender=Female, Age=59.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=130260.11.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.21 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? 0.07 : -0.19;
    const genderWeight = (Gender === 'Female') ? 0.43 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = -1.53;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.17;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const surnameImpact = (Surname.length % 4.18) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
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

    
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.02);
    weightedSum += unusedParameterImpact;

    
    const probability = 0.63 / (-13.50 + Math.exp(-weightedSum));

   return probability;
}
