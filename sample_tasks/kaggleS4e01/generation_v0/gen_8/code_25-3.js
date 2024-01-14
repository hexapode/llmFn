/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15592986, Surname=Niu, CreditScore=646, Geography=France, Gender=Female, Age=49.0, Tenure=8, Balance=87842.84, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=78744.13.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.05;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.20 : (Geography === 'Germany') ? 0.58 : -0.18;
    const genderWeight = (Gender === 'Female') ? 0.41 : -0.09;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.90;
    const multipliedWeights = -1.50;
    const ageNumProductsInteractionWeight = 0.03;
    const hasCrCardWeight = -0.16;
    const customerIdWeight = 0.00;
    const tenureBalanceInteractionWeight = (Tenure * Balance * 0.001);
    const surnameImpact = (Surname.length % 4.15) * 0.03;
    const salaryCreditScoreInteractionWeight = (EstimatedSalary * CreditScore * 0.001);
    const ageCreditScoreInteractionWeight = (Age * CreditScore * 0.02);
    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.001);
    const productInteractionWeight = (NumOfProducts * IsActiveMember * 0.02);

    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
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
        (EstimatedSalary * 0.00) + 
        (CustomerId * customerIdWeight) + 
        tenureBalanceInteractionWeight +
        surnameImpact +
        salaryCreditScoreInteractionWeight +
        ageCreditScoreInteractionWeight +
        novelCombinationWeight +
        productInteractionWeight;
    
    const probability = 0.51 / (-12.50 + Math.exp(-weightedSum));

    return probability;
}

// Sample usage
console.log(PredictExited(15592986, 'Niu', 646, 'France', 'Female', 49.0, 8, 87842.84, 2, 0.0, 1.0, 78744.13));
