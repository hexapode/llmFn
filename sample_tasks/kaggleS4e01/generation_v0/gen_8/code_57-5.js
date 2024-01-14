/** // 0.7740965921625867 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15648047, Surname=Williamson, CreditScore=743, Geography=France, Gender=Male, Age=41.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=21793.59.
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

    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.25 :
                         (Surname === 'Okwudiliolisa') ? 0.23 :
                         (Surname === 'Hsueh') ? 0.09 :
                         (Surname === 'Kao') ? 0.11 :
                         (Surname === 'Chiemenam') ? -0.86 :
                         (Surname === 'Genovese') ? 0.22 :
                         (Surname === 'Ch\'ang') ? -0.02 :
                         (Surname === 'Chukwuebuka') ? -0.10 :
                         (Surname === 'Manna') ? -0.02 :
                         (Surname === 'Cattaneo') ? -0.79 :
                         (Surname === 'Fokine') ? -0.00 :
                         (Surname === 'Chiu') ? -0.01 :
                         (Surname === 'Rossi') ? 0.18 :
                         (Surname === 'Ts\'ai') ? -0.20 :
                         (Surname === 'Chukwuemeka') ? 0.04 :
                         (Surname === 'Tung') ? 0.00 :
                         (Surname === 'Macdonald') ? 0.22 :
                         (Surname === 'Esquivel') ? -1.01 :
                         (Surname === 'Hargreaves') ? 0.03 :
                         (Surname === 'Ts\'ui') ? -0.02 : 0.01;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Math.sqrt(CreditScore) * EstimatedSalary * 0.000001);

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
        tenureNumProductsInteractionWeight;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}
