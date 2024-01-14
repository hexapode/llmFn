/** // 0.6425909268378374 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : (Geography === 'Spain') ? -0.1 : -0.05;
    const genderImpact = (Gender === 'Female') ? 0.4 : 0;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.8 : 0;
    const productsImpact = (NumOfProducts < 3) ? -0.8 : 0.3;

    const weightedSum = CreditScore * 0.01
        + Age * 0.07
        + Tenure * (-0.05)
        + Balance * 0.0001
        + geographyImpact
        + genderImpact
        + isActiveMemberImpact
        + productsImpact
        + EstimatedSalary * 0.0000001;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
