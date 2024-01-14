/** // 0.8688458335441224 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15572744, Surname=Iadanza, CreditScore=715, Geography=France, Gender=Female, Age=38.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=72993.65.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.83;
    const multipliedWeights = -1.43;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.20 : 1.57;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;
    const balanceAgeInteractionWeight = Balance * Age * 0.00;
    const ageGenderInteractionWeight = (Age / 148.02) * (Gender === 'Male' ? 0.06 : 0.08);
    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.20 :
                         (Surname === 'Okwudiliolisa') ? 0.31 :
                         (Surname === 'Hsueh') ? 0.10 :
                         (Surname === 'Kao') ? 0.08 :
                         (Surname === 'Chiemenam') ? -0.81 :
                         (Surname === 'Genovese') ? 0.46 :
                         (Surname === 'Ch\'ang') ? -0.09 :
                         (Surname === 'Chukwuebuka') ? -0.14 :
                         (Surname === 'Manna') ? -0.12 :
                         (Surname === 'Cattaneo') ? -0.64 :
                         (Surname === 'Fokine') ? -0.22 :
                         (Surname === 'Chiu') ? -0.08 :
                         (Surname === 'Rossi') ? 0.55 :
                         (Surname === 'Ts\'ai') ? -0.24 :
                         (Surname === 'Chukwuemeka') ? 0.00 :
                         (Surname === 'Tung') ? -0.07 :
                         (Surname === 'Macdonald') ? 0.51 :
                         (Surname === 'Esquivel') ? -2.11 :
                         (Surname === 'Hargreaves') ? -0.03 :
                         (Surname === 'Ts\'ui') ? -0.22 : 0.02;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    
    const tenureAgeInteractionWeight = Tenure * Age * 0.00;
    const tenureHasCrCardInteractionWeight = Tenure * HasCrCard * 0.00; // New variable introduction

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00) + balanceAgeInteractionWeight + tenureAgeInteractionWeight + tenureHasCrCardInteractionWeight;

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
        (customerIdWeight * CustomerId) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore)) +
        ageGenderInteractionWeight;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15572744, 'Iadanza', 715, 'France', 'Female', 38.0, 3, 0.0, 1, 1.0, 0.0, 72993.65));
