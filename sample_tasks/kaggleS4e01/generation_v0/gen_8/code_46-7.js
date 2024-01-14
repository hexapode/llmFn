/** // 0.6023791909956236 //**/
/**
I try on the following input and it returned 0.10118122303791541" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15695792, Surname=Ch'iu, CreditScore=719, Geography=Germany, Gender=Female, Age=30.0, Tenure=9, Balance=153610.61, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=93844.89.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0006;
    const ageWeight = 0.0045;
    const balanceWeight = 0.00007;
    const geographyWeight = (Geography === 'France') ? -0.0012 : (Geography === 'Germany') ? 0.0096 : -0.0008;
    const genderWeight = (Gender === 'Female') ? 0.023 : -0.012;
    const tenureWeight = -0.011;
    const isActiveMemberWeight = -0.029;
    const multipliedWeights = -0.0005;
    const ageNumProductsInteractionWeight = 0.001;
    const hasCrCardWeight = -0.014;
    const customerIdWeight = 0.0000002;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00000005;
    const surnameImpact = (Surname.length % 4.29) * 0.003;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00000005;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00005;
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.00003);
    const unusedParameterImpact = (Math.abs(HasCrCard - IsActiveMember) * 0.0003);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -0.08 : 0.029;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00001;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00003;

    const novelCombination = (Balance / (Age + 1.00) * 0.00003);

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
        (EstimatedSalary * 0.0000002) +
        (CustomerId * customerIdWeight) +
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombination +
        unusedParameterImpact +
        numOfProductsWeight +
        tenureNumProductsInteractionWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15695792, "Ch'iu", 719, "Germany", "Female", 30.0, 9, 153610.61, 2, 1.0, 0.0, 93844.89);
console.log(result);
