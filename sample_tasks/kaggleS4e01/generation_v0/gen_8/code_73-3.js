/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15655328, Surname=Y?, CreditScore=687, Geography=Spain, Gender=Male, Age=32.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=173776.06.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.03;
    const ageWeight = 0.07;
    const balanceWeight = 0.01;
    const geographyWeight = (Geography === 'France') ? -0.11 : (Geography === 'Germany') ? 0.01 : (Geography === 'Spain') ? -0.04 : -0.05;
    const genderWeight = (Gender === 'Female') ? 0.46 : -0.03;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.81;
    const multipliedWeights = -1.73;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.36;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.02;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.01);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.08);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.20 : 1.59;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.02;
    const balanceAgeInteractionWeight = Balance * Age * 0.00; 
    const ageGenderInteractionWeight = (Age / 148.84) * (Gender === 'Male' ? 0.06 : 0.08);
    const surnameImpact = (Surname === 'Y') ? 0.10 : 0.00;

    const novelCombination = (Balance / (Age + 1.00) * 0.01);
    
    const tenureAgeInteractionWeight = Tenure * Age * 0.00;

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (CustomerId * 0.00) + (Balance * 0.00) + balanceAgeInteractionWeight + tenureAgeInteractionWeight;

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

    const probability = 1.0/ (1.0 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15655328.00, 'Y?', 687.00, 'Spain', 'Male', 32.00, 5.00, 0.00, 2.00, 0.00, 1.00, 173776.06));
