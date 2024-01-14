/** // 0.8683145161787168 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15706552, Surname=Odinakachukwu, CreditScore=660, Geography=France, Gender=Female, Age=32.0, Tenure=7, Balance=85311.7, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=156731.91.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.59 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const surnameImpact = (Surname.length % 4.29) * 0.03;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.57; 
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;  
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00; 
    const estimatedSalaryWeight = 0.00;  // new variable added
    const ageHasCrCardInteractionWeight = Age * HasCrCard * 0.00;  // new variable added

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight + tenureCreditScoreInteractionWeight;  
    
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
        (EstimatedSalary * estimatedSalaryWeight) +  // new variable added 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight + 
        tenureNumProductsInteractionWeight +
        ageHasCrCardInteractionWeight;  // new variable added 

    const probability = 0.30 / (0.94 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15706552.00, "Odinakachukwu", 660.00, "France", "Female", 32.00, 7.00, 85311.7, 2.00, 1.00, 1.00, 156731.91);
console.log(result);
