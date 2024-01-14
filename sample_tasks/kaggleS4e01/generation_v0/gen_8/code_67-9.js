/** // 0.8060334929602885 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15693379, Surname=Chukwuebuka, CreditScore=684, Geography=Spain, Gender=Male, Age=37.0, Tenure=1, Balance=137948.92, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88724.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.01;
    const ageWeight = 0.04;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.08 : (Geography === 'Germany') ? 0.60 : (Geography === 'Spain') ? -0.07 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.53 : -0.02;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.81;
    const multipliedWeights = -1.39;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.13;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = 0.00;
    const salaryCreditScoreInteractionWeight = 0.00;
    const ageCreditScoreInteractionWeight = 0.00;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.06);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.32 : 1.48;
    const tenureCreditScoreInteractionWeight = 0.00;
    const tenureNumProductsInteractionWeight = 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.04;
    const balanceAgeInteractionWeight = 0.00; 

    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.25 :
                         (Surname === 'Okwudiliolisa') ? 0.28 :
                         (Surname === 'Hsueh') ? 0.11 :
                         (Surname === 'Kao') ? 0.07 :
                         (Surname === 'Chiemenam') ? -0.79 :
                         (Surname === 'Genovese') ? 0.46 :
                         (Surname === 'Ch\'ang') ? -0.10 :
                         (Surname === 'Chukwuebuka') ? -0.18 :
                         (Surname === 'Manna') ? -0.13 :
                         (Surname === 'Cattaneo') ? -0.66 :
                         (Surname === 'Fokine') ? -0.25 :
                         (Surname === 'Chiu') ? -0.08 :
                         (Surname === 'Rossi') ? 0.60 :
                         (Surname === 'Ts\'ai') ? -0.28 :
                         (Surname === 'Chukwuemeka') ? -0.01 :
                         (Surname === 'Tung') ? -0.09 :
                         (Surname === 'Macdonald') ? 0.56 :
                         (Surname === 'Esquivel') ? -2.05 :
                         (Surname === 'Hargreaves') ? -0.02 :
                         (Surname === 'Ts\'ui') ? -0.25 : 0.03;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (customerIdWeight * CustomerId) + (Balance * balanceWeight) + balanceAgeInteractionWeight; 

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
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        (newVariableWeight * Math.sqrt(CreditScore));

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15693379.00, 'Chukwuebuka', 684.00, 'Spain', 'Male', 37.00, 1.00, 137948.92, 1.00, 1.00, 1.00, 88724.96));
