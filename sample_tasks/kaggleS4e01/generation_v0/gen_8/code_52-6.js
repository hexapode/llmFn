/** // 0.6772937147273932 //**/
/**
I try on the following input and it returned 0.04192691374123743" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15594305, Surname=Rizzo, CreditScore=712, Geography=France, Gender=Female, Age=32.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=1703.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.005; // adjusting the weight
    const ageWeight = 0.05; // adjusting the weight
    const balanceWeight = 0.00; // adjusting the weight
    const geographyWeight = (Geography === 'France') ? -0.06 : (Geography === 'Germany') ? 0.45 : (Geography === 'Spain') ? -0.07 : -0.06; // adjusting the weights
    const genderWeight = (Gender === 'Female') ? 0.40 : -0.02; // adjusting the weights
    const tenureWeight = -0.02; // adjusting the weight
    const isActiveMemberWeight = -0.85; // adjusting the weight
    // removing multipliedWeights
    const ageNumProductsInteractionWeight = 0.03; // adjusting the weight
    const hasCrCardWeight = -0.15; // adjusting the weight
    // removing customerIdWeight
    // updating tenureBalanceInteractionWeight calculation
    const tenureBalanceInteractionWeight = Tenure * (Balance / 10000);
    // adjusting surnameImpact
    const surnameImpact = (Surname.length % 4.32) * 0.02;
    // removing salaryCreditScoreInteractionWeight
    // removing ageCreditScoreInteractionWeight
    // removing novelCombination and its weight
    // removing unusedParameterImpact
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.20 : 1.56; 
    // removing interactionFactor
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.01; // adjusting the weight
    // removing estimatedSalaryWeight
    // removing newVariableWeight

    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (HasCrCard * hasCrCardWeight) +
        (Tenure * tenureBalanceInteractionWeight) +
        surnameImpact +
        (NumOfProducts * numOfProductsWeight) +
        (Tenure * tenureNumProductsInteractionWeight);

    const probability = 1.21 / (2.06 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15594305.00, "Rizzo", 712.00, "France", "Female", 32.00, 10.00, 0.00, 2.00, 1.00, 0.00, 1703.58);
console.log(result);
