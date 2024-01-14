/** // 0.8688127585630334 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15763612, Surname=T'an, CreditScore=756, Geography=Germany, Gender=Male, Age=41.0, Tenure=3, Balance=124439.49, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=47093.11.
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
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06); // Impact from unused parameter
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.54;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.03;

    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.24 : 
                         (Surname === 'Okwudiliolisa') ? 0.32 : 
                         (Surname === 'Hsueh') ? 0.09 : 
                         (Surname === 'Kao') ? 0.10 : 
                         (Surname === 'Chiemenam') ? -0.85 : 
                         (Surname === 'Genovese') ? 0.33 : 
                         (Surname === 'Ch\'ang') ? -0.03 : 
                         (Surname === 'Chukwuebuka') ? -0.11 : 
                         (Surname === 'Manna') ? -0.03 : 
                         (Surname === 'Cattaneo') ? -0.68 : 
                         (Surname === 'Fokine') ? -0.11 : 
                         (Surname === 'Chiu') ? -0.02 : 
                         (Surname === 'Rossi') ? 0.29 : 
                         (Surname === 'Ts\'ai') ? -0.21 : 
                         (Surname === 'Chukwuemeka') ? 0.00 : 
                         (Surname === 'Tung') ? -0.09 : 
                         (Surname === 'Macdonald') ? 0.33 : 
                         (Surname === 'Esquivel') ? -2.11 : 
                         (Surname === 'Hargreaves') ? -0.02 : 
                         (Surname === 'Ts\'ui') ? -0.13 : 0.02;

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
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1.21 / (0.94 + Math.exp(-weightedSum));

    return probability;
}
