/** // 0.6527956019192158 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.1 : (Geography === 'Spain') ? -0.05 : 0;
    const genderImpact = (Gender === 'Female') ? 0.3 : 0;
    const tenureImpact = -0.05;
    const isActiveMemberImpact = -0.3;
    const balanceAgeInteractionImpact = Balance * Age * 0.0002;

    let weightedSum = (CreditScore * 0.0005) +
        (Age * 0.005) +
        (Balance * 0.0002) +
        geographyImpact +
        genderImpact +
        (Tenure * tenureImpact) +
        (IsActiveMember * isActiveMemberImpact) +
        (NumOfProducts * -0.6) +
        balanceAgeInteractionImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
