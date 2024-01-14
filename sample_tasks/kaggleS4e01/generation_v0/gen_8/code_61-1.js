/** // -Infinity //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15738662, Surname=De Garis, CreditScore=628, Geography=Spain, Gender=Female, Age=62.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=199693.84.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.05;
    const ageWeight = 0.10;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.03 : (Geography === 'Germany') ? -0.05 : 0.11 : -0.08;
    const genderWeight = (Gender === 'Female') ? 0.55 : -0.10;
    const tenureWeight = -0.05;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = 0.99;
    const ageNumProductsInteractionWeight = 0.00;
    const hasCrCardWeight = -0.20;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = Tenure * Balance * 0.00;
    const salaryCreditScoreInteractionWeight = EstimatedSalary * CreditScore * 0.00;
    const ageCreditScoreInteractionWeight = Age * CreditScore * 0.00;
    const novelVariableWeight = (Math.sqrt(CreditScore / (Age + 1.00)) * 0.02);
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -5.00 : 2.50;
    const tenureCreditScoreInteractionWeight = Tenure * CreditScore * 0.00;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.00;
    const estimatedSalaryWeight = 0.00;
    const newVariableWeight = -0.05;

    const surnameImpact = (Surname === 'Kowalczyk') ? 0.25 :
                         (Surname === 'Pirozzi') ? -0.35 :
                         (Surname === 'Tsou') ? -0.15 :
                         (Surname === 'Chukwuebuka') ? -0.10 :
                         (Surname === 'Chidiuto') ? -0.08 :
                         (Surname === 'Czajkowski') ? 0.12 :
                         (Surname === 'Roh') ? -0.40 :
                         (Surname === 'Chukwuemeka') ? -0.20 : 0.05;

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    const interactionFactor = (Age * NumOfProducts * ageNumProductsInteractionWeight) + (tenureCreditScoreInteractionWeight) + (customerIdWeight * CustomerId) + (Balance * 0.00); 

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
        numOfProductsWeight +
        tenureNumProductsInteractionWeight +
        newVariableWeight;

    const probability = 1 / (1 + Math.exp(-1.2 * weightedSum));

    return probability;
}

console.log(PredictExited(15738662.00, 'De Garis', 628.00, 'Spain', 'Female', 62.00, 5.00, 0.00, 1.00, 1.00, 0.00, 199693.84));
