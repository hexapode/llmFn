/** // 0.8688452701236686 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15720706, Surname=Hsing, CreditScore=689, Geography=Spain, Gender=Female, Age=29.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=122949.71.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.07;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.07 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.06 : -0.07;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.82;
    const multipliedWeights = -1.42;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.54;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;

    const randomVariable = 0.05; // Adding a new variable

    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.22 :
                         (Surname === 'Okwudiliolisa') ? 0.31 :
                         (Surname === 'Hsueh') ? 0.10 :
                         (Surname === 'Kao') ? 0.08 :
                         (Surname === 'Chiemenam') ? -0.83 :
                         (Surname === 'Genovese') ? 0.45 :
                         (Surname === 'Ch\'ang') ? -0.09 :
                         (Surname === 'Chukwuebuka') ? -0.15 :
                         (Surname === 'Manna') ? -0.12 :
                         (Surname === 'Cattaneo') ? -0.60 :
                         (Surname === 'Fokine') ? -0.22 :
                         (Surname === 'Chiu') ? -0.08 :
                         (Surname === 'Rossi') ? 0.56 :
                         (Surname === 'Ts\'ai') ? -0.23 :
                         (Surname === 'Chukwuemeka') ? -0.01 :
                         (Surname === 'Tung') ? -0.07 :
                         (Surname === 'Macdonald') ? 0.53 :
                         (Surname === 'Esquivel') ? -2.11 :
                         (Surname === 'Hargreaves') ? -0.03 :
                         (Surname === 'Ts\'ui') ? -0.23 : 0.02;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00);

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
        (randomVariable); // Using a new variable here

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15720706, 'Hsing', 689, 'Spain', 'Female', 29.00, 6, 0.0, 2, 0.0, 0.0, 122949.71));
