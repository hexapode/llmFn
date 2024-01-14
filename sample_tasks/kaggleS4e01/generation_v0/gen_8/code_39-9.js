/** // 0.8640553646264663 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15767231, Surname=Sun, CreditScore=655, Geography=France, Gender=Male, Age=42.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=130866.95.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.05;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.09 : (Geography === 'Germany') ? 0.59 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.44 : 0.00;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.79;
    const multipliedWeights = -1.63;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const surnameImpact = (Surname.length % 4.32) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.04);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -3.60 : 1.11; 

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
        novelCombinationWeight +
        unusedParameterImpact +
        numOfProductsWeight; 

    const probability = 0.08 / (0.15 + Math.exp(-weightedSum));

   return probability;
}