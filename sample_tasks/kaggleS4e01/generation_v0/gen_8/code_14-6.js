/** // 0.6713957421233073 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const ageWeight = 0.05;
    const geographyWeight = (Geography === 'Germany') ? 0.3 : -0.2;
    const genderWeight = (Gender === 'Female') ? 0.3 : 0;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -0.8;

    const weightedSum = (CreditScore * 0.01) +
        (Age * ageWeight) +
        (Balance * 0.00005) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * -0.8) +
        (HasCrCard * -0.1) +
        (EstimatedSalary * 0.0000005);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
