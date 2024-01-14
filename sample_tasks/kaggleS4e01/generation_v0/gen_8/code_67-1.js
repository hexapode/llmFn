/** // 0.8687686968833392 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15682048, Surname=Ch'iu, CreditScore=667, Geography=Germany, Gender=Female, Age=33.0, Tenure=5, Balance=137963.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=181208.47.
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
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.05);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.54;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.05;
    const balanceAgeInteractionWeight = Balance * Age * 0.00; 
    const surnameImpact = (Surname === 'Okwudilichukwu') ? 0.22 :
                        (Surname === 'Okwudiliolisa') ? 0.31 :
                        (Surname === 'Hsueh') ? 0.10 :
                        (Surname === 'Kao') ? 0.08 :
                        (Surname === 'Chiemenam') ? -0.81 :
                        (Surname === 'Genovese') ? 0.46 :
                        (Surname === 'Ch\'ang') ? -0.09 :
                        (Surname === 'Chukwuebuka') ? -0.15 :
                        (Surname === 'Manna') ? -0.11 :
                        (Surname === 'Cattaneo') ? -0.63 :
                        (Surname === 'Fokine') ? -0.22 :
                        (Surname === 'Chiu') ? -0.08 :
                        (Surname === 'Rossi') ? 0.55 :
                        (Surname === 'Ts\'ai') ? -0.23 :
                        (Surname === 'Chukwuemeka') ? -0.01 :
                        (Surname === 'Tung') ? -0.07 :
                        (Surname === 'Macdonald') ? 0.50 :
                        (Surname === 'Esquivel') ? -2.11 :
                        (Surname === 'Hargreaves') ? -0.03 :
                        (Surname === 'Ts\'ui') ? -0.22 : 0.02;

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

    const probability = 1.21 / (1.21 + Math.exp(-weightedSum)); // Adjust this value based on the precise business requirements

    return probability;
}

console.log(PredictExited(15682048.00, 'Ch\'iu', 667.00, 'Germany', 'Female', 33.00, 5.00, 137963.07, 1.00, 1.00, 0.00, 181208.47));
