/** // 0.4985880369997876 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15760090, Surname=Yefremova, CreditScore=718, Geography=France, Gender=Female, Age=28.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=94774.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.10;
    const ageWeight = 0.08;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.14 : (Geography === 'Germany') ? 0.65 : 0.00;
    const genderWeight = (Gender === 'Female') ? 0.50 : 0.00;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = -1.48;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.18;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.07);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.25 : 1.62;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.04;
    const balanceAgeInteractionWeight = Balance * Age * 0.00;
    const surnameImpact = (Surname === 'Aguirre') ? 0.03 : (Surname === 'Fox') ? -0.04 : 0.00;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00) + balanceAgeInteractionWeight; 

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
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1.18 / (0.92 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15760090.00, 'Yefremova', 718.00, 'France', 'Female', 28.00, 8.00, 0.00, 2.00, 1.00, 0.00, 94774.47));
