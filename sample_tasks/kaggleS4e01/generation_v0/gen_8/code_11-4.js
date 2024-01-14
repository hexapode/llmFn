/** // 0.6363716496389451 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageWeight = 0.05;
    const geographyWeight = (Geography === 'Germany') ? 0.3 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.2 : 0;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.8;
    const balanceNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.2;

    let weightedSum = CreditScore * 0.01 +
        Age * ageWeight +
        geographyWeight +
        genderWeight +
        Tenure * tenureWeight +
        IsActiveMember * isActiveMemberWeight +
        Balance * 0.000002 +
        NumOfProducts * 0.15 +
        Age * NumOfProducts * balanceNumProductsInteractionWeight +
        HasCrCard * hasCrCardWeight;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
